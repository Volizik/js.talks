const squareDigits = require('./squareDigits');

describe('squareDigits', () => {
    test('Should return 811181 for 9119', () => {
        expect(squareDigits(9119)).toEqual(811181);
    })
    test('Should return 9414 for 3212', () => {
        expect(squareDigits(3212)).toEqual(9414);
    })
    test('Should return 0 for 0', () => {
        expect(squareDigits(0)).toEqual(0);
    })
    test('Should return -1 for negative numbers', () => {
        expect(squareDigits(-1)).toEqual(-1);
    })
});
