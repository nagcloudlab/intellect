
import { createClient } from 'redis';
import { Queue } from './queue.js'


(async () => {

    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
    const logsQueue = new Queue("logs", client)
    const MAX = 5;
    for (let i = 0; i < MAX; i++) { // 3
        await logsQueue.push("Hello world #" + i); // 4
    }
    console.log("Created " + MAX + " logs"); // 5


})();