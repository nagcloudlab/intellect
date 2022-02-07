
const fs = require('fs')



/**
 *
 * A chunk of memory allocated outside the V8 heap (intentionally limited in size,we cannot resize an allocated buffer).
 *
 * why we need ?
 *
 *  to read/write a data from IO sources ( file , socket , ...)
 *
 */


const buf1 = Buffer.alloc(8)
console.log(buf1)

const buf2 = Buffer.from([1, 4, , 7, 2, 8, 9])
console.log(buf2)

const buf3 = Buffer.from("this is Nag", 'utf-8')
console.log(buf3)
console.log(buf3.toString())


fs.readFile('./package-lock.json', (err, data) => {
    console.log(data.toString('utf-8'))
})
© 2022 GitHub, Inc.
    Terms
Privacy
Security
Status
Docs
