const pythagoreanTriple = require('./pythagoreanTriple');

describe('pythagoreanTriple', () => {
    test('Should return true for [3, 4, 5]', () => {
        expect(pythagoreanTriple([3, 4, 5])).toEqual(true);
    })
    test('Should return false for [5, 4, 5]', () => {
        expect(pythagoreanTriple([5, 4, 5])).toEqual(false);
    })
    test('Should return undefined for [5, 4, 5, 6]', () => {
        expect(pythagoreanTriple([5, 4, 5, 6])).toBeUndefined();
    })
});
