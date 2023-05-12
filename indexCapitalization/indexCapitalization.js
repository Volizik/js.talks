// Given a string and an array of integers representing indices, capitalize all letters at the given indices.
// For example:
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.
// Good luck!

const indexCapitalization = (str, arr) => {
    // your code here...
    return [...str]
        .map((letter, idx) => {
            return arr.includes(idx) ? letter.toUpperCase() : letter
        }).join('');
    // return str.replace(/\w/g, (letter, idx) => arr.includes(idx) ? letter.toUpperCase() : letter);
}

module.exports = indexCapitalization;

console.log(indexCapitalization('test', [1,2]))
