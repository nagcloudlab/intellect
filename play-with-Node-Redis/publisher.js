
const redis = require('redis');
const publisherClient = redis.createClient()

const channel = 'status'

async function publish(message) {
    console.log(`started ${channel} channel publisher`);
    publisherClient.publish(channel, message)
}

let i = 0;
setInterval(() => {
    i++
    publish(`message-${i}`);
}, 3000);