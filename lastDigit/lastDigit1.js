// Your job is to implement a function which returns the last D digits of an integer N as a list.
// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.

// N = 1; D = 1
// result = [1]

// N = 1234; D = 2
// result = [3, 4]

// N = 637547; D = 6
// result = [6, 3, 7, 5, 4, 7]

// Method slice(-n) return the number of elements equal to n from the end of array
const lastDigit = (n, d) => {
    // your code here...
    if (d <= 0) return [];
    if (d > `${n}`.length) return `${n}`.split('').map(Number);
    return `${n}`.slice(-d).split('').map(Number);
}

module.exports = lastDigit;
