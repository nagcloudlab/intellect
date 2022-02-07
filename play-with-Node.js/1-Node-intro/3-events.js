const EventEmitter = require('events').EventEmitter;

class Door extends EventEmitter {
    open() {
        console.log("door opened..");
        this.emit('open', {})
    }
    close() {
        console.log("door closed");
        this.emit('close', {})
    }
}


const door = new Door();

setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close();
    }, 2000)
}, 2000)


// ---------------------------------------------------------
// Light
// ---------------------------------------------------------

door.on('open', e => {
    console.log("LIGHT ON >>>>");
})
door.on('close', e => {
    console.log("LIGHT OFF <<<<")
})

// ---------------------------------------------------------
// AC
// ---------------------------------------------------------


door.on('open', e => {
    console.log("AC ON >>>>");
})
door.on('close', e => {
    console.log("AC OFF <<<<")
})