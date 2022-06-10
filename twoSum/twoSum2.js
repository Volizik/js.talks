// Solution with only one for loop

const containsOnlyType = (type, array) => array.every((el) => typeof el === type);

const twoSum = (numbers, target) => {
    if (numbers.length < 2 || !containsOnlyType('number', numbers)) {
        throw Error('Array must have at least 2 numbers, and contain only numbers');
    }

    for (let value of numbers) {
        const firstIndex = numbers.indexOf(value);
        const secondIndex = numbers.indexOf(target - value);

        if (secondIndex >= 0 && firstIndex >= 0 && secondIndex !== firstIndex) {
            return [firstIndex, secondIndex];
        }
    }
}

module.exports = twoSum;
