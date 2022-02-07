
const fs = require('fs')


//------------------------------------------------------
// read veg-menu.txt file & display in terminal  e.g IO
//-------------------------------------------------------

const vegMenu = fs.readFileSync('./veg-menu.txt'); // 1s
console.log(vegMenu.toString())

const nonVegMenu = fs.readFileSync('./non-veg-menu.txt'); // 1s
console.log(nonVegMenu.toString())

console.log("Do something else")