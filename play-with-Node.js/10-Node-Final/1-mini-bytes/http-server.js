
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write("welcome to http-server")
    res.end()
})

server.listen({
    host: 'localhost',
    port: 8080
})