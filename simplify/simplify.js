// Given a positive integer as input, return the output as a string in the following format:
// Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.
//
// Examples
// Input	Output
// 0	""
// 56	"5*10+6"
// 60	"6*10"
// 999	"9*100+9*10+9"
// 10004	"1*10000+4"

const simplify = (num) => {
    // your code here...
    if (!Number.isInteger(num)) throw Error('Argument must be an integer');

    const str = num.toString();
    let multiplication = str;
    if (num > 9) {
        multiplication = `${str[0]}*1${'0'.repeat(str.length - 1)}`
    }

    const nextNum = parseInt(str.slice(1));
    let additional = '';
    if (nextNum > 9) {
        additional = `+${simplify(nextNum)}`;
    } else if (nextNum > 0) {
        additional = `+${nextNum}`
    }

    return multiplication + additional;
}

module.exports = simplify;
