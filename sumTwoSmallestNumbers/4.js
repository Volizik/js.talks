// All of these options will work, but here's the problem.
// The sort method will sort the original array we passed in props. Because an array is copied by reference, unlike primitives.
// Mutate props is bad practice. So I recommend you copy array first.

function sumTwoSmallestNumbers(numbers) {
    const [ first, second ] = [...numbers].sort((a, b) => a - b);
    return first + second;
}

module.exports = sumTwoSmallestNumbers;
