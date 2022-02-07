
const fs = require('fs')

//------------------------------------------------------
// read veg-menu.txt file & display in terminal  e.g IO
//-------------------------------------------------------

const callback = (error, buffer) => {
    console.log(buffer.toString());
}

fs.readFile('./veg-menu.txt', callback) // on event ( once file red) execute callback
fs.readFile('./non-veg-menu.txt', callback)

console.log("Do something else")


