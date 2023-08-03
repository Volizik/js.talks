const sumOfDigits = require('./sumOfDigits');

const error = 'Param must be a positive number'
describe('sumOfDigits', () => {
    test('With right params', () => {
        expect(sumOfDigits(16)).toEqual(7);
        expect(sumOfDigits(942)).toEqual(6);
        expect(sumOfDigits(493193)).toEqual(2);
        expect(sumOfDigits(0)).toEqual(0);
    })
    test('With wrong params', () => {
        expect(() => sumOfDigits()).toThrow(error);
        expect(() => sumOfDigits(-18)).toThrow(error);
        expect(() => sumOfDigits('493193')).toThrow(error);
        expect(() => sumOfDigits(true)).toThrow(error);
    })
});
