// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = (arr = []) => {
    // your code here...
    if (!Array.isArray(arr) || arr.length === 0) return;
    if (arr.length === 1) return arr[0];

    let result = [];
    arr.forEach((num) => {
        if (result.includes(num)) {
            result = result.filter((n) => num !== n);
        } else {
            result.push(num);
        }
    });
    return result[0];
    // return arr.find((num) => arr.filter((n) => n === num).length % 2)
}



module.exports = findOdd;
