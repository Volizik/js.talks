const unusedDigits1 = require('./unusedDigits1');
const unusedDigits2 = require('./unusedDigits2');

describe('unusedDigits', () => {
    test('Should return filtered numbers', () => {
        expect(unusedDigits1(12, 34, 56, 78)).toEqual('09');
        expect(unusedDigits1(2015, 8, 26)).toEqual('3479');
        expect(unusedDigits2(12, 34, 56, 78)).toEqual('09');
        expect(unusedDigits2(2015, 8, 26)).toEqual('3479');
    })
    test('Should return all numbers', () => {
        expect(unusedDigits1()).toEqual('0123456789');
        expect(unusedDigits2()).toEqual('0123456789');
    })
    test('Params contains non number values in array', () => {
        expect(unusedDigits1('test', false, 2, 10, 100500)).toEqual('346789');
        expect(unusedDigits2('test', false, 2, 10, 100500)).toEqual('346789');
    })
});
