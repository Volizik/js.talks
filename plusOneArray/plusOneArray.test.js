const plusOneArray = require('./plusOneArray');

describe('plusOneArray', () => {
    test('Should return [4, 3, 2, 6] for [4, 3, 2, 5]', () => {
        expect(plusOneArray([4, 3, 2, 5])).toEqual([4, 3, 2, 6]);
    })
    test('Should return [1, 2, 4, 0] for [1, 2, 3, 9]', () => {
        expect(plusOneArray([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
    })
    test('Should return [1, 0, 0, 0, 0] for [9, 9, 9, 9]', () => {
        expect(plusOneArray([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
    })
});
