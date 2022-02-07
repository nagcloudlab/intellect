const fs = require('fs').promises
const axios = require('axios')

const config = require('./config.json')

async function saveMovies() {
    try {
        let response = await axios.get(config.apiUrl)
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        await fs.writeFile("asyncAwaitMovies.csv", movieList)
    } catch (error) {
        console.error(`Could not save the Ghibli movies to a file: ${error}`);
    }
}

saveMovies();
