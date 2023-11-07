// Given any number of boolean flags. Function should return true if and only if one of them is true while others are false.
// If function is called without arguments it should return false.

// function onlyOne() {
//     return [...arguments].filter(x => x).length === 1
// }

const onlyOne = (...args) => {
    // your code here...
    return args.filter(Boolean).length === 1
}

module.exports = onlyOne;
