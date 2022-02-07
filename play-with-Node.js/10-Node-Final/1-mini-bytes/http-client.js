

/*

packages to make HTTP-calls

1-callback based

    - 'request'

2-promise based

    - 'node-fetch' 
    - 'axios' 

*/

const axios = require('axios')
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
