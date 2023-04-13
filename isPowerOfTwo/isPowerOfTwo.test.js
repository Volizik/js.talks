const isPowerOfTwo = require('./isPowerOfTwo');

describe('isPowerOfTwo', () => {
    test('Should return true', () => {
        expect(isPowerOfTwo(1)).toEqual(true);
        expect(isPowerOfTwo(2)).toEqual(true);
        expect(isPowerOfTwo(8)).toEqual(true);
        expect(isPowerOfTwo(256)).toEqual(true);
    })
    test('Should return false', () => {
        expect(isPowerOfTwo(0)).toEqual(false);
        expect(isPowerOfTwo(3)).toEqual(false);
        expect(isPowerOfTwo(234)).toEqual(false);
        expect(isPowerOfTwo(514)).toEqual(false);
    })
});
