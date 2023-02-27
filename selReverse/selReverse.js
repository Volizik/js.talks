// Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.
// E.g
// selReverse([1,2,3,4,5,6], 2) //[2,1, 4,3, 6,5]
// if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.
// selReverse([2,4,6,8,10,12,14,16], 3) //[6,4,2, 12,10,8, 16,14]
// Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.

const selReverse = (arr, length = 0) => {
    // your code here...
    if (length <= 1) return arr;

    const result = [];
    for (let i = 0; i <= arr.length; i += length) {
        result.push(arr.slice(i, i + length).reverse());
    }
    return result.flat();
}

console.log(selReverse([ 2, 4, 6, 8, 10, 12, 14, 16 ], 2))

module.exports = selReverse;
