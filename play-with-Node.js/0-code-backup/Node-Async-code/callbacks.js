

/*


The asynchronous code will be written in three ways: 

    1.callbacks
    2.promises
    3.async/await keywords


*/

const request = require('request');
const fs = require('fs')

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if (error) {
        console.error(`Could not send request to API: ${error.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}.`);
        return;
    }
    console.log('Processing our list of movies');
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`);
    });

    let movieList = '';
    movies.forEach(movie => {
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
    });

    fs.writeFile('callbackMovies.csv', movieList, (error) => {
        if (error) {
            console.error(`Could not save the Ghibli movies to a file: ${error}`);
            return;
        }
        console.log('Saved our list of movies to callbackMovies.csv');;
    });
});



/*

doSomething1(() => {
    doSomething2(() => {
        doSomething3(() => {
            doSomething4(() => {
                doSomething5(() => {
                    // final action
                });
            });
        });
    });
});

*/