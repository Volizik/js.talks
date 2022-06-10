// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in a list like so: [index1, index2].

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid if
//      - numbers will be an array of length 2 or greater;
//      - all items will be numbers;
//      - target will always be the sum of two different items from that array;

const containsOnlyType = (type, array) => array.every((el) => typeof el === type);

const twoSum = (numbers, target) => {
    // your code here...
    if (numbers.length < 2 || !containsOnlyType('number', numbers)) {
        throw Error('Array must have at least 2 numbers, and contain only numbers');
    }

    for (let idx1 = 0; idx1 <= numbers.length; idx1++) {
        for (let idx2 = 0; idx2 <= numbers.length; idx2++) {
            if (idx1 === idx2) continue;

            if (numbers[idx1] + numbers[idx2] === target) {
                return [idx1, idx2];
            }
        }
    }
}

module.exports = twoSum;

