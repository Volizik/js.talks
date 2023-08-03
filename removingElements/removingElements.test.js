const removingElements = require('./removingElements');

describe('removingElements', () => {
    test('Should be passed', () => {
        expect(removingElements(['Hello', 'Goodbye', 'Hello Again'])).toEqual(['Hello', 'Hello Again']);
        expect(removingElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 3, 5, 7, 9]);
        expect(removingElements([[1, 2]])).toEqual([[1, 2]]);
    })
    test('Should be an error', () => {
        expect(() => removingElements(123)).toThrow('Expecting an array');
        expect(() => removingElements()).toThrow('Expecting an array');
        expect(() => removingElements({test: 123})).toThrow('Expecting an array');
    })
});
