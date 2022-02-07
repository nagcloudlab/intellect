const fs = require('fs').promises
const axios = require('axios')


axios.get("https://ghibliapi.herokuapp.com/films")
    .then(response => {
        console.log('Successfully retrieved our list of movies');
        let movieList = ""
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        })
        return movieList;
    })
    .then(movieList => {
        return fs.writeFile("promiseMovies.csv", movieList)
    })
    .then(() => {
        console.log('Saved our list of movies to promiseMovies.csv');
    })
    .catch((error) => {
        console.error(`Could not save the Ghibli movies to a file: ${error}`);
    });