
const { MongoClient } = require('mongodb')

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
    "mongodb+srv://user1:userone@cluster0.socov.mongodb.net/sample_mflix?retryWrites=true&w=majority";

const client = new MongoClient(uri)

function getMovie(title) {
    try {
        await client.connect()
        const database = client.db("sample_mflix")
        const movies = database.collection("movies")
        const query = { title }
        const movie = await movies.findOne(query) // 
        console.log(movie);
    } finally {
        await client.close()
    }
}

getMovie("Back to the Future")
