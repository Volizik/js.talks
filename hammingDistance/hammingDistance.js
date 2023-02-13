// The Hamming Distance is a measure of similarity between two strings of equal length.
// Complete the function so that it returns the number of positions where the input strings do not match.
// hammingDistance("espresso", "Expresso") -> 2
// hammingDistance("Hello World", "Hello World") -> 0

const hammingDistance = (a, b) => {
    // your code here...
    // return [...a].filter((letter, idx) => letter !== b[idx]).length;
    return [...a].reduce(
        (sum, letter, idx) => sum + (letter !== b[idx]),
        0
    );
}

module.exports = hammingDistance;
