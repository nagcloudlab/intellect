
const { MongoClient } = require('mongodb')

const url = "mongodb+srv://user1:userone@cluster0.socov.mongodb.net/sample_mflix?retryWrites=true&w=majority";
const client = new MongoClient(url)

module.exports = client