

import { createClient } from 'redis';


(async () => {
    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();


    async function saveLink(id, author, title, link) {
        client.hSet(`link:${id}`, "author", author, "title", title, "link", link, "score", 0)
    }

    async function upVote(id) { // 1
        await client.hIncrBy("link:" + id, "score", 1); // 2
    }
    async function downVote(id) { // 3
        await client.hIncrBy("link:" + id, "score", -1); // 4
    }

    async function showDetails(id) { // 1
        const replies = await client.hGetAll("link:" + id);
        console.log(replies);
    }

    saveLink(123, "dayvson", "Maxwell Dayvson's Github page", "https://github.com/dayvson");
    upVote(123);
    upVote(123);
    saveLink(456, "hltbra", "Hugo Tavares's Github page", "https://github.com/hltbra");
    upVote(456);
    upVote(456);
    downVote(456);

    showDetails(123);
    showDetails(456);


})();