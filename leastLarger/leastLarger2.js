const leastLarger = (array, index) => {
    if (array.length < index || typeof index !== "number") return -1;

    const filteredArray = array.filter((num) => num > array[index]);

    return array.indexOf(Math.min(...filteredArray));
}

module.exports = leastLarger;
