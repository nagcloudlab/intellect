const Rx = require('rxjs')
const { filter, bufferCount } = require('rxjs/operators')

const { Subject } = Rx;

// -----------------------------------------------
// publisher / producer 
// -----------------------------------------------



const trainer = {
    getSubjects() {
        const stream = new Subject() // Observable Stream

        let i = 0;
        let intervalId = setInterval(() => {
            i++;
            if (i === 10) {
                stream.complete()
                clearInterval(intervalId)
            } else {
                console.log("trainer propagatic change/event into stream");
                stream.next(i)
            }
        }, 1000);

        return stream;
    }
}

// -----------------------------------------------
// subscriber / consumer
// -----------------------------------------------

const employee1 = {
    learnAndWork() {
        const stream = trainer.getSubjects();
        stream
            .pipe(filter(s => s % 2 === 0))
            .pipe(bufferCount(2))
            .subscribe({
                next: subject => {
                    console.log("employee1 reacting to subject - " + subject);
                },
                error: error => {
                    console.log("employee1 reacting to error - " + error);
                },
                complete: () => {
                    console.log("emp1-thanks trainer for all subjects");
                }
            })
    }
}

employee1.learnAndWork()