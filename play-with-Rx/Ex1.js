

// -----------------------------------------------
// publisher / producer 
// -----------------------------------------------

const trainer = {
    getSubject() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const subject = 1
                console.log("trainer resolving promise..");
                resolve(subject)
                // console.log("trainer rejecting promise");
                // reject("not this time")
            }, 3000);
        })
        return promise;
    }
}

// -----------------------------------------------
// subscriber / consumer
// -----------------------------------------------

const employee = {
    learnAndWork() {
        console.log("employee requesting subject.");
        const promise = trainer.getSubject();
        console.log("employee got promise, defering actions to future");
        promise
            .then(subject => {
                console.log("employee learning the subject - " + subject);
                console.log("employee working based on the subject - " + subject);
            })
            .catch(error => {
                console.log("employee making oops on error - " + error);
            })
        console.log("employee other work..");
    }
}

employee.learnAndWork()