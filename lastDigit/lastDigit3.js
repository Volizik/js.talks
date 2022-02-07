// Method slice() with negative number returned all array if number is greater than array length
// Knowing this we don't need a condition for digitsArray length:
const lastDigit = (n, d) => {
    return d <= 0 ? [] : `${n}`.split('').map(Number).slice(-d);
}

module.exports = lastDigit;
