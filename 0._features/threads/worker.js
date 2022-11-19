// There are some limitations for worker script.
// You have no access to global object window, can't directly manipulate the DOM,
// you can import library to worker script using function importScripts();
// importScripts('https://example.com/hello.js');

// worker.js
const methods = {
    hardTask(n) {
        console.log('[worker.js] Hard task was run');
        for(let i = 0; i < n; i++) {}
        console.log('[worker.js] Hard task finished');
        self.postMessage('Finished');
    }
}

self.onmessage = (event) => {
    console.log('[worker.js] Received message');
    const method = methods[event.data.method];
    if (!method) {
        console.log('[worker.js] Wrong method');
        return;
    }
    method(event.data.args);
}
