
import http from 'http' // Low-Level Module
import fs from 'fs'


const server = http.createServer();

server.on('request', (req, res) => {


    // fs.readFile('./file.pdf', (error, data) => {
    //     if (error)
    //         throw error;
    //     res.writeHead(200, {
    //         'Content-Type': "application/pdf"
    //     })
    //     res.write(data)
    //     res.end();
    // })

    //-----------------------------------------------------------------
    // Non-blocking IO without stream
    //-----------------------------------------------------------------

    // fs.readFile('/home/nag/Downloads/big_file.img', (error, data) => {
    //     if (error)
    //         throw error;
    //     res.writeHead(200, {
    //         'Content-Type': "application/x-raw-disk-image"
    //     })
    //     res.write(data)
    //     res.end();
    // })

    //-----------------------------------------------------------------
    // Non-blocking IO with stream with backpressure
    //-----------------------------------------------------------------

    res.writeHead(200, {
        'Content-Type': "application/x-raw-disk-image"
    })
    const readableStream = fs.createReadStream('/home/nag/Downloads/big_file.img')
    readableStream.pipe(res);
    //------------------------------------------------------------------


})

server.listen(3000, () => {
    console.log("server up");
})