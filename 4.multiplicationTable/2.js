const multiplicationTable = (size) => {
    const result = [];

    for (let rowIdx = 0; rowIdx < size; rowIdx++) {
        result[rowIdx] = [];
        for (let colIdx = 0; colIdx < size; colIdx++) {
            result[rowIdx][colIdx] = (rowIdx + 1) * (colIdx + 1);
        }
    }

    return result;
}

module.exports = multiplicationTable;
