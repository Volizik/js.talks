// Of course, we could use RegExp to work with strings.

// "x{n}" - x is symbol that repeats n times
// "." - any symbol

const splitStrings = (str) => {
    if (!str) return [];

    return `${str}_`.match(/.{2}/g) || [];
}
// const splitStrings = (str = '') => `${str}_`.match(/.{2}/g) || [];

module.exports = splitStrings;
