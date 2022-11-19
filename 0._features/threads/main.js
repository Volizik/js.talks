// Today I'm going to tell you about multithreading in javascript.
// You will say, that js is one thread language, and you will be right.
// But browsers and node.js has API that allows us run js in another thread.
// Let's look at example for browsers:

// main.js
const runWorker = () => {
    if (!window.Worker) {
        console.log('[main.js] Your browser doesn\'t support web worker api');
        return;
    }

    const worker = new Worker('./worker.js');
    console.log('[main.js] Delegate hard task to worker');
    worker.postMessage({method: 'hardTask', args: 1_000_000_000});
    console.log('[main.js] Task was delegated, continue our main.js script without blocking event loop')
    worker.onmessage =  (event) => {
        console.log(`[main.js] Worker answered with message "${event.data}"`);
    };
}

runWorker();

// After running this script you will see this output in console:
// [main.js] Delegate hard task to worker
// [main.js] Task was delegated, continue our main.js script without blocking event loop
// [worker.js] Received message
// [worker.js] Hard task was run
// [worker.js] Hard task finished
// [main.js] Worker answered with message "Finished"

