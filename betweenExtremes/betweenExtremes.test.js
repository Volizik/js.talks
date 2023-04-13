const betweenExtremes = require('./betweenExtremes');

describe('betweenExtremes', () => {
    test('Should return 20 for [23, 3, 19, 21, 16]', () => {
        expect(betweenExtremes([23, 3, 19, 21, 16])).toEqual(20);
    })
    test('Should return 554 for [1, 434, 555, 34, 112]', () => {
        expect(betweenExtremes([1, 434, 555, 34, 112])).toEqual(554);
    })
    test('Should throw Error', () => {
        expect(() => betweenExtremes([1])).toThrow('Array must contain at least two numbers');
        expect(() => betweenExtremes({})).toThrow('Array must contain at least two numbers');
    })
});
