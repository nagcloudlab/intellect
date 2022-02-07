
import { createClient } from 'redis';


(async () => {

    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    async function upVote(id) {
        const key = `article:${id}:votes`
        await client.INCR(key)
    }

    async function downVote(id) {
        const key = `article:${id}:votes`
        await client.DECR(key)
    }

    async function showResults(id) {
        var voteKey = "article:" + id + ":votes";
        const voteCount = await client.GET(voteKey)
        console.log(voteCount);
    }


    upVote(12345)
    upVote(12345);
    upVote(12345);
    upVote(10001);
    upVote(10001);

    showResults(12345)
    showResults(10001)


})();