// Given a list of integers, return the digits that are not present in any of them.

// Example:
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

const unusedDigits = (...params) => {
    // your code here...
    const arrayOfPossibleNumbers = [...Array(10).keys()];

    if (!params) return arrayOfPossibleNumbers.join('');

    const paramsAsString = params.join('');

    return arrayOfPossibleNumbers
        .filter((num) => !paramsAsString.includes(`${num}`))
        .join('');
}

module.exports = unusedDigits;
