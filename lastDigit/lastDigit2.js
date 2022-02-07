const lastDigit = (n, d) => {
    if (d <= 0) return [];

    const digitsArray = `${n}`.split('').map(Number);
    return d > digitsArray.length ? digitsArray : digitsArray.slice(-d);
}

module.exports = lastDigit;
