const powersOfTwo1 = require('./powersOfTwo1');

describe('powersOfTwo', () => {
    test('Should return [1]', () => {
        expect(powersOfTwo1(0)).toEqual([1]);
    })
    test('Should return [1, 2, 4, 8, 16]', () => {
        expect(powersOfTwo1(4)).toEqual([1, 2, 4, 8, 16]);
    })
});
