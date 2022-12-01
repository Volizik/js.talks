// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
    // your code here...
    if (typeof num !== 'number' || num < 0) return -1;

    return Number(Array.from(String(num), (n) => {
        return Math.pow(Number(n), 2);
    }).join(''));
}

module.exports = squareDigits;
