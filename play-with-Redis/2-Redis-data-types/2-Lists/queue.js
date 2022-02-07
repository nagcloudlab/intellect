
class Queue {
    constructor(queueName, redisClient) {
        this.queueName = queueName
        this.redisClient = redisClient
        this.queueKey = `queues:${queueName}`
        this.timeout = 0
    }
    size() {
        return this.redisClient.LLEN(this.queueKey)
    }
    push(data) {
        return this.redisClient.LPUSH(this.queueKey, data); // 2
    }
    pop() {
        return this.redisClient.BRPOP(this.queueKey, this.timeout); // 2
    }
}

export { Queue }

