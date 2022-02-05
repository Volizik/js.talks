const sortTheOddArray = (array) => {
    const odd = array.filter((num) => num % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

module.exports = sortTheOddArray;
