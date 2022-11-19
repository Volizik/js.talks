// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// The array can't be empty; only non-negative, single digit integers are allowed
// Return null for invalid inputs.

// Examples
// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

const plusOneArray = (array) => {
    // your code here...
    const length = array.length;
    const minValue = 0;
    const maxValue = 9
    const result = [];
    let needAdd = 1;

    if (length === 0) return null;

    for (let i = length - 1; i >= 0; i--) {
        if (array[i] < minValue || array[i] > maxValue) return null;

        const lastElement = i === 0;
        let sum = array[i] + needAdd;
        needAdd = 0
        if (sum > maxValue && !lastElement) {
            needAdd = 1
            sum = 0
        }
        if (lastElement && sum > maxValue) {
            const splitNumber = `${sum}`.split('').reverse().map(Number)
            result.push(...splitNumber);
            break
        }
        result.push(sum);
    }
    return result.reverse();
}

module.exports = plusOneArray;
