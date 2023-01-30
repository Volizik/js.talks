const createPhoneNumber = (arr) => {
    // your code here...
    if (arr.length !== 10) throw Error('Array must have 10 numbers');

    const copy = [...arr];
    const pattern = "(999) 999-9999"
    return [...pattern].map((s) => s !== '9' ? s : copy.shift()).join('');
}

module.exports = createPhoneNumber;
