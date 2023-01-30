const createPhoneNumber = (arr) => {
    if (arr.length !== 10) throw Error('Array must have 10 numbers');

    let number = "(xxx) xxx-xxxx"
    arr.forEach((n) => number = number.replace('x', n));
    return number;
}

module.exports = createPhoneNumber;
