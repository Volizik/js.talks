const sumEvenNumbers = require('./sumEvenNumbers');

describe('sumEvenNumbers', () => {
    test('Should return 30 for [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]', () => {
        expect(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8])).toEqual(30);
    })
    test('Should return 0', () => {
        expect(sumEvenNumbers([])).toEqual(0);
        expect(sumEvenNumbers([1, 3, 5])).toEqual(0);
    })
});
