// It would be cool if we could create arrays filled by numbers from 1 to n like this arr = [...n].
// Your task is to do something with Number to make it possible.
// In your code you shouldn't do anything else, only modify Number.

// Example
// [...1] => [1]
// [...2] => [1, 2]
// [...3] => [1, 2, 3]
// [...4] => [1, 2, 3, 4]
// [...5] => [1, 2, 3, 4, 5]

// It is possible if you make number iterable.
// For this add Symbol.iterator field to Number prototype.
// Symbol.iterator it's a function that must return object like {next: () => {value, done}}
// "value" field can be any, but "done" must have boolean

// Number.prototype[Symbol.iterator] = function() {
//     const arr = Array.from({length: this}, (_, idx) => idx + 1);
//     let index = 0;
//
//     return {
//         next: function() {
//             return index < arr.length
//                 ? {value: arr[index++], done: false}
//                 : {done: true};
//         }
//     }
// }

// Returned object with "next" function and fields {value, done} seems like generator.
// Let's try rewrite code using generator
//
// Number.prototype[Symbol.iterator] = function*() {
//     for (let i = 1; i <= this; i++) {
//         yield i;
//     }
// }

// Also we could use yield* expression.
// The yield* expression is used to delegate to another generator or iterable object.
// In our case we will use iterable object (array)

// Number.prototype[Symbol.iterator] = function*() {
//     yield* Array.from({length: this}, (_, i) => i + 1);
// }


const spreadNumber = () => {
    // your code here...
    Number.prototype[Symbol.iterator] = function*() {
        yield* Array.from({length: this}, (_, i) => i + 1);
    }
}

module.exports = spreadNumber;
