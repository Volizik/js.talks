// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invertValues([1,2,3,4,5]) // [-1,-2,-3,-4,-5]
// invertValues([1,-2,3,-4,5]) // [-1,2,-3,4,-5]
// invertValues([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

const invertValues = (arr) => arr.map((n) => -n);

module.exports = invertValues;
