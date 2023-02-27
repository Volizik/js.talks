const moveZeros = (arr) => {
    return arr
        .filter((val) => val !== 0)
        .concat(arr.filter((val) => val === 0));
}

module.exports = moveZeros;

