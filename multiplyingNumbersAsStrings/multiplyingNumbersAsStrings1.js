//
// Multiply two numbers! Simple!
// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string

const multiply = (a, b) => {
    // your code here...
    if (
        typeof a !== 'string' ||
        typeof b !== 'string' ||
        isNaN(parseInt(a)) ||
        isNaN(parseInt(b))
    ) throw new Error('Incorrect input params');

    return `${BigInt(a) * BigInt(b)}`;
}

module.exports = multiply;
