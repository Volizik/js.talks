
const isPalindrome = (num) => num > 10 && `${num}` === `${num}`.split('').reverse().join('');

const palindrome = (num, s) => {
    if (typeof num !== "number" || num < 0 || typeof s !== "number" || s < 0) return 'Not valid';

    let result = [];

    while (result.length < s) {
        if (isPalindrome(num)) result.push(num);
        num++;
    }
    return result;
}

module.exports = palindrome;

