const palindrome_11 = require('./palindrome_11');

const params = '';
const result = '';

describe('palindrome_1', () => {
    test('Should return true', () => {
        expect(palindrome_11(2332)).toEqual(true);
        expect(palindrome_11(12321)).toEqual(true);
    })
    test('Should return false', () => {
        expect(palindrome_11(23392)).toEqual(false);
    })
    test('Should return Not valid', () => {
        expect(palindrome_11(-32)).toEqual("Not valid");
    })
});
