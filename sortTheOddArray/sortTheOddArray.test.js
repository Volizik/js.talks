const sortTheOddArray1 = require('./sortTheOddArray1');
const sortTheOddArray2 = require('./sortTheOddArray2');

const params = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const result = [1, 8, 3, 6, 5, 4, 7, 2, 9, 0];

describe('sortTheOddArray', () => {
    test('1', () => {
        expect(sortTheOddArray1(params)).toEqual(result);
    })
    test('2', () => {
        expect(sortTheOddArray2(params)).toEqual(result);
    })
});
