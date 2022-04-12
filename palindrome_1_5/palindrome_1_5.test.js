const palindrome_1_51 = require('./palindrome_1_51');
const palindrome_1_52 = require('./palindrome_1_52');

describe('palindrome_1_5', () => {
    test('must return Not valid', () => {
        expect(palindrome_1_51('12', 2)).toEqual('Not valid');
        expect(palindrome_1_51(12, '2')).toEqual('Not valid');
        expect(palindrome_1_51(-3, 3)).toEqual('Not valid');
        expect(palindrome_1_52('12', 2)).toEqual('Not valid');
        expect(palindrome_1_52(12, '2')).toEqual('Not valid');
        expect(palindrome_1_52(-3, 3)).toEqual('Not valid');
    })
    test('must return palindromes list', () => {
        expect(palindrome_1_51(101, 2)).toStrictEqual([101, 111]);
        expect(palindrome_1_52(101, 2)).toStrictEqual([101, 111]);
    })
});
