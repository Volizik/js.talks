const nthChar = require('./nthChar');

describe('nthChar', () => {
    test('Should work', () => {
        expect(nthChar([])).toEqual('');
        expect(nthChar(['yoda', 'best', 'has'])).toEqual('yes');
    })
    test('Shouldn\'t work', () => {
        expect(() => nthChar()).toThrow('Wrong arguments');
        expect(() => nthChar(123)).toThrow('Wrong arguments');
        expect(() => nthChar(true)).toThrow('Wrong arguments');
    })
});
