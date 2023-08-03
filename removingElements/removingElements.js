// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

const removingElements = (arr) => {
    if (!Array.isArray(arr)) throw Error('Expecting an array');

    return arr.filter((_, idx) => idx % 2 === 0);
}

module.exports = removingElements;
