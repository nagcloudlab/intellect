const { Kafka } = require("kafkajs")


run();
async function run() {

    try {
        const kafka = new Kafka({
            "clientId": "myApp",
            "brokers": ["localhost:9092"]
        })
        const consumer = kafka.consumer({ "groupId": "test" })
        console.log("Connecting.....")
        await consumer.connect()
        console.log("Connected!")

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        })
        consumer.run({
            "eachMessage": async result => {
                console.log(`rvd msg ${result.message.value} on partition ${result.partition}`);
            }
        })
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        // process.exit(0)
    }

}