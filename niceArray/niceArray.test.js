const niceArray1 = require('./niceArray1');

describe('niceArray', () => {
    test('empty array', () => {
        expect(niceArray1([])).toEqual(false);
    })
    test('array is undefined', () => {
        expect(niceArray1()).toEqual(false);
    })
    test('Should return true', () => {
        expect(niceArray1([2, 10, 9, 3])).toEqual(true);
    })
    test('Should return false', () => {
        expect(niceArray1([2, 10, 9, 4])).toEqual(false);
    })
});
