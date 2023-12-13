const stringEndWith = require('./stringEndWith');

describe('stringEndWith', () => {
    test('Should return true', () => {
        expect(stringEndWith('abcde', 'cde')).toEqual(true);
        expect(stringEndWith('abc', 'bc')).toEqual(true);
    })
    test('Should return false', () => {
        expect(stringEndWith('abcde', 'abc')).toEqual(false);
        expect(stringEndWith('abcde')).toEqual(false);
        expect(stringEndWith(undefined, 'abcde')).toEqual(false);
        expect(stringEndWith('abcde', 23)).toEqual(false);
        expect(stringEndWith( 23, 'test')).toEqual(false);
    })
});
