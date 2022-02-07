var express = require('express');
var router = express.Router();

const dbClient = require('../db')

/* GET mivies listing. */
router.get('/', async function (req, res, next) {
  try {
    await dbClient.connect()
    const moviesColln = dbClient.db('sample_mflix').collection('movies')
    const cursor = await moviesColln.find({}).limit(50)
    if ((await cursor.count()) === 0) {
      console.warn("No documents found!");
    }
    let movies = []
    await cursor.forEach(mov => {
      movies.push(mov)
    });
    res.render("movie-list", { movies }) // SSR
  } finally {
    await dbClient.close()
  }
});

module.exports = router;
