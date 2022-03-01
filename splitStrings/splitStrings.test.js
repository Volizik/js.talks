const splitStrings1 = require('./splitStrings1');
const splitStrings2 = require('./splitStrings2');

describe('splitStrings', () => {
    test('Odd string length', () => {
        expect(splitStrings1('abc')).toStrictEqual(['ab', 'c_']);
        expect(splitStrings2('abc')).toStrictEqual(['ab', 'c_']);
    })
    test('Even string length', () => {
        expect(splitStrings1('abcdef')).toStrictEqual(['ab', 'cd', 'ef']);
        expect(splitStrings2('abcdef')).toStrictEqual(['ab', 'cd', 'ef']);
    })
    test('Empty string', () => {
        expect(splitStrings1('')).toStrictEqual([]);
        expect(splitStrings2('')).toStrictEqual([]);
    })
    test('None string passed', () => {
        expect(splitStrings1()).toStrictEqual([]);
        expect(splitStrings2()).toStrictEqual([]);
    })
    test('String with symbols', () => {
        expect(splitStrings1('ab cd*ef s ')).toStrictEqual(['ab', ' c', 'd*', 'ef', ' s', ' _']);
        expect(splitStrings2('ab cd*ef s ')).toStrictEqual(['ab', ' c', 'd*', 'ef', ' s', ' _']);
    })
});
