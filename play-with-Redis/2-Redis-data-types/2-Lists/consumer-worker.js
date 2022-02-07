
import { createClient } from 'redis';
import { Queue } from './queue.js'


(async () => {

    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();


    const logsQueue = new Queue("logs", client)

    const reply = await logsQueue.pop()
    console.log(reply);


})();