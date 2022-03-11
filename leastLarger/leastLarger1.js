// Task
// Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

const leastLarger = (array, index) => {
    // your code here...
    if (array.length < index || typeof index !== "number") return -1;

    const filteredArray = array.filter((num) => num > array[index]);
    return array.indexOf(filteredArray.sort((a, b) => a - b)[0]);
}

console.log(leastLarger( [4, 4, 1, 3, 5, 6], 0 ));

module.exports = leastLarger;
