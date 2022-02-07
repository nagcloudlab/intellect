
class LeaderBoard {
    constructor(key, client) {
        this.key = key;
        this.client = client
    }
    async addUser(username, score) {
        await this.client.ZADD(this.key, { score, value: username });
        console.log("User", username, "added to the leaderboard!");
    }
    async removeUser(username) {
        await this.client.ZREM(this.key, username);
        console.log("User", username, "removed successfully!"); // 3
    }
    async getUserScoreAndRank(username) {
        const zscoreReply = await this.client.ZSCORE(this.key, username)
        const zrevrankReply = await this.client.ZRANK(this.key, username)
        console.log("Score:", zscoreReply + ", Rank: #" + (zrevrankReply + 1)); // 5
    }
    async showTopUsers(qty) {
        const reply = await this.client.ZREVRANGE(this.key, 0, qty - 1, "WITHSCORES")
        for (var i = 0, rank = 1; i < reply.length; i += 2, rank++) {// 3
            console.log("#" + rank, "User: " + reply[i] + ", score:", reply[i + 1]);
        }
    }

}

export { LeaderBoard }