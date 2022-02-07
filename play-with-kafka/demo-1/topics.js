
const { Kafka } = require('kafkajs')

run();
async function run() {
    try {
        const kafka = new Kafka({
            clientId: "myApp",
            "brokers": ["localhost:9092"]
        })
        const admin = kafka.admin();
        console.log("Connecting..");
        await admin.connect()
        console.log("Connectd!");
        await admin.createTopics({
            "topics": [
                {
                    "topic": "Users",
                    "numPartitions": 2,
                }
            ]
        })
        console.log("Created Successfully");
        await admin.disconnect()
    } catch (ex) {
        console.log(`Something bad happened ${ex}`);
    }
    finally {
        process.exit(0)
    }

}