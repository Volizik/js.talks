const multiplyingNumbersAsStrings1 = require('./multiplyingNumbersAsStrings1');

describe('multiplyingNumbersAsStrings', () => {
    test('Should multiply strings', () => {
        expect(multiplyingNumbersAsStrings1('0000001', '3')).toEqual('3');
        expect(multiplyingNumbersAsStrings1('1020303004875647366210', '2774537626200857473632627613')).toEqual('2830869077153280552556547081187254342445169156730');
    })
    test('One of parameter not a string or undefined', () => {
        expect(() => multiplyingNumbersAsStrings1('0000001', 3)).toThrow('Incorrect input params');
        expect(() => multiplyingNumbersAsStrings1('0000001')).toThrow('Incorrect input params');
    })
});
