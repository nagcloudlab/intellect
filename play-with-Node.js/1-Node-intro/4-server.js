
const http = require('http')

//------------------------------------
// HTTP server
//------------------------------------

const httpServer = http.createServer(); // Event Emitter

httpServer.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello');
})

httpServer.listen(3000, () => {
    console.log("server-up , listening at localhost:3000")
})