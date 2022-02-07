
// reference : https://www.joyent.com/node-js/production/design/errors


const fs = require('fs')
const path = require('path')
const events = require('events')

//----------------------------------------------------------------
// sync api
//----------------------------------------------------------------

try {
    const data = fs.readFileSync(path.join(__dirname, 'data1.txt'))
    console.log(data.toString('utf-8'))
} catch (error) {
    console.log(error.message)
}

//----------------------------------------------------------------
// async api
//----------------------------------------------------------------

fs.readFile('./data1.txt', (err, data) => {
    if (err) {
        console.log(err.message);
        return
    }
    // if (err) throw err;
    console.log(data.toString('utf-8'))
})


//-------------------------------------------------------------

/*
four main ways to deliver an error in Node.js:
1. throw the error (making it an exception).
    i.e throw new Error('something bad happened');
2. pass the error to a callback, a function provided specifically for handling errors and the results of asynchronous operations
    i.e callback(new Error('something bad happened'));
3. pass the error to a reject Promise function
    i.e
    new Promise((resolve,reject) =>{
        //
        if(error)
        reject(error)
    })
4. emit an "error" event on an EventEmitter
    i.e
    ee.emit("error",{error:error})
*/

//-------------------------------------------------------------


/*
    Operational errors vs. programmer errors
    1. Operational errors
    => Operational errors represent run-time problems experienced by correctly-written programs.
       These are not bugs in the program. In fact, these are usually problems with something else:
       system itself (e.g., out of memory or too many open files),
       the system’s configuration (e.g., no route to a remote host),
       the network (e.g., socket hang-up),
       or a remote service (e.g., a 500 error, failure to connect, or the like).
       Examples include:
        failed to connect to server
        failed to resolve hostname
        invalid user input
        request timeout
        server returned a 500 response
        socket hang-up
        system is out of memory
    2. Pogrammer errors
        Programmer errors are bugs in the program.
        These are things that can always be avoided by changing the code.
        tried to read property of “undefined”
        called an asynchronous function without a callback
        passed a “string” where an object was expected
        passed an object where an IP address string was expected
        ...
        operational errors are part of the normal operation of a program.
        Programmer errors are bugs.
        Handling operational errors
            => Deal with the failure directly
            => Propagate the failure to your client
            => Retry the operation
            => Blow up
            => Log the error — and do nothing else
        (Not) handling programmer errors
            => The best way to recover from programmer errors is to crash immediately.
     ----------------------------------------------------------------
     Patterns for writing functions

        => Throw, Callback, Reject, or EventEmitter patterns
        
*/


// # throw

// function getSomething() {
//     // 
//     let error = true
//     if (error)
//         throw new Error('something bad happened') // sync

// }


// function doSomething() {
//     try {
//         getSomething();
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// doSomething();

//----------------------------------------------------------------

// #callback

// function getSomething(callback) {
//     // 
//     let error = false
//     if (error)
//         return callback(new Error('something bad happened'), null)

//     callback(null, { data: 'DATA' })

// }


// function doSomething() {
//     getSomething((err, data) => {
//         if (err) {
//             console.log(err.message)
//             return
//         }
//         console.log(data)
//     });
// }

// doSomething();

//----------------------------------------------------------------

// #promise api

// function getSomething() {
//     // 
//     return new Promise((resolve, reject) => {
//         let error = true
//         if (error)
//             reject(new Error('something bad happened'))
//     })

// }


// function doSomething() {
//     const promise = getSomething();
//     promise
//         .then(data => { console.log(data) })
//         .catch(error => console.log(error.message));
// }

// doSomething();

//----------------------------------------------------------------

// # EventEmitter

const ee = new events.EventEmitter()

function getSomething() {
    setTimeout(() => {
        let error = true
        if (error)
            ee.emit('error', new Error('something bad happened'))
    }, 2000)
}


function doSomething() {
    getSomething()
    ee.on('error', e => {
        console.log(e.message)
    })
    ee.on('data', data => {
        console.log(data)
    })
}

doSomething();

