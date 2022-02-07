
const redis = require('redis');
const subscriberClient = redis.createClient();

const channel = 'status';

subscriberClient.subscribe(channel, (error, channel) => {
    if (error) {
        throw new Error(error);
    }
    console.log(`Subscribed to ${channel} channel. Listening for updates on the ${channel} channel...`);
});

subscriberClient.on('message', (channel, message) => {
    console.log(`Received message from ${channel} channel: ${message}`);
});