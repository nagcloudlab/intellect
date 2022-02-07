import http from 'http'

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world \n ' + '- ' + process.pid);
}).listen(8000);


