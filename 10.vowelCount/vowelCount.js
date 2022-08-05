// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const vowelCount = (str) => {
    // your code here...
    if (typeof str !== 'string') return 0;
    return str.length - str.replace(/a|e|i|o|u/g, '').length;
}

module.exports = vowelCount;
