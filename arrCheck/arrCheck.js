// Is every value in the array an array?
//
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
//
// Examples:
//
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false
// #ARRAYS #FUNDAMENTALS

const arrCheck = (arr) => {
    // your code here...
    return arr.every((item) => Array.isArray(item));
    // return arr.every(Array.isArray);
}

module.exports = arrCheck;
