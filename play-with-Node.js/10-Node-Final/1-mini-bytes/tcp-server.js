
const net = require('net')
const server = net.createServer()
const connectedClients = []

server.on('connection', (client) => {
    console.log("client connected");
    client.write("welcome to server \n")
    connectedClients.push(client)
})

setInterval(() => {
    const now = new Date().toISOString()
    connectedClients.forEach(client => {
        client.write(now + "\n")
    })
}, 2000)

server.listen({
    host: 'localhost',
    port: 8080
})