const lastDigit1 = require('./lastDigit1');
const lastDigit2 = require('./lastDigit2');
const lastDigit3 = require('./lastDigit3');

const params = [637547, 3];
const result = [5, 4, 7];

describe('lastDigit', () => {
    test('Testing returned value 1', () => {
        expect(lastDigit1(...params)).toStrictEqual(result);
    })
    test('Testing returned value 2', () => {
        expect(lastDigit2(...params)).toStrictEqual(result);
    })
    test('Testing returned value 3', () => {
        expect(lastDigit3(...params)).toStrictEqual(result);
    })
});
