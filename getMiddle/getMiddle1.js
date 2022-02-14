//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

// For this task you could use both methods .slice() and .substring() (don't use .substr() because it's deprecated)
// Difference between .slice() and .substring() is:
//              .substring(a, b)               .slice(a, b)
// if a > b     arguments will swap            returns empty string
// if a < 0     is treated as if it were 0     returns chars from the end of string

const getMiddle = (s) => {
    // your code here...
    const middle = Math.floor(s.length / 2);
    const isOdd = s.length % 2 !== 0;

    return s.substring(isOdd ? middle : middle - 1, middle + 1);
}

module.exports = getMiddle;
