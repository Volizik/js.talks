// Debounce allows you to call function only once per time you need.
// Useful case is autocomplete implementation. When user type some information to your input, javascript code have to send this information to server, to get similar words and show them to user.
// But if your code send request every time when user press a button on keyboard, you will have too many requests on server.
// To avoid it we could use debounce technic.
// When we wrap request function in debounce, it will be called after some milliseconds you set if user didn't press any button in this time, not every keyboard press.
// So in the example on the second image we receive only one log (last one) in console because two previous function will be invoked almost in the same time with the third

const debounce = (callback, ms) => {
    let timerId = null;

    return (...args) => {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => callback(args), ms);
    }
}

const fetchFn = (num) => {
    console.log(`Fetching ${num}...`);
}

const debouncedFetch = debounce(fetchFn, 300);

debouncedFetch(1); // mustn't be in console output
debouncedFetch(2); // mustn't be in console output
debouncedFetch(3); // must be in console output

// const throttle = (callback, ms) => {
//     let timerId = null;
//     let savedArgs = null;
//
//     return (...args) => {
//         if (timerId) {
//             savedArgs = args;
//             return;
//         }
//
//         callback(args);
//         timerId = setTimeout(() => {
//             if (savedArgs) {
//                 callback(savedArgs);
//                 savedArgs = null;
//             }
//             timerId = null
//         }, ms);
//     }
// }
//
// const throttledFetch = throttle(fakeFetch, 1000);
//
// throttledFetch(1); // must be in console output
// throttledFetch(2); // mustn't be in console output
// throttledFetch(3); // mustn't be in console output
//
// setTimeout(() => {
//     throttledFetch(4);
// }, 1400);
// setTimeout(() => {
//     throttledFetch(5);
// }, 1500);
