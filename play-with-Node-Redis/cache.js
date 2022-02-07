const redis = require('redis');
const axios = require('axios');
const express = require('express');


const app = express()
const USERS_API = "https://jsonplaceholder.typicode.com/users"

const client = redis.createClient()

app.get("/users", (req, res) => {
    try {
        axios
            .get(`${USERS_API}`)
            .then(response => {
                const users = response.data
                console.log('Users retrieved from the API');
                res.status(200).json(users)
            })
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

app.get("/cached-users", (req, res) => {

    try {
        client.get("users", (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }
            if (data) {
                console.log("Users retreived from Redis");
                res.status(200).json(data)
            } else {
                axios.get(`${USERS_API}`)
                    .then(response => {
                        const users = response.data
                        client.setex('users', 600, JSON.stringify(users));
                        console.log("Users retreived from the API");
                        res.status(200).json(users)
                    })
            }
        })

    } catch (err) {
        res.status(500).send({ error: err.message })
    }

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});