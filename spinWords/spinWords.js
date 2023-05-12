// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = (str) => {
    // your code here...
    // return str
    //     .split(' ')
    //     .map((word) => word.length >= 5 ? [...word].reverse().join('') : word)
    //     .join(' ');
    return str.replace(/\w{5,}/g, (word) =>  {
        return [...word].reverse().join('');
    });
}

module.exports = spinWords;
