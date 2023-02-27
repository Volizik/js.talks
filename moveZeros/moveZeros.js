// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) => {
    // your code here...
    const filtered = arr.filter((item) => item !== 0)
    const nullsAmount = arr.length - filtered.length;

    return [...filtered, ...Array(nullsAmount).fill(0)]
}

module.exports = moveZeros;
