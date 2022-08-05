const vowelCount = require('./vowelCount');

const params = 'abracadabra';
const result = 5;

describe('vowelCount', () => {
    test('Should return 5 for \'abracadabra\'', () => {
        expect(vowelCount(params)).toEqual(result);
    })
    test('Should return 0 for undefined', () => {
        expect(vowelCount()).toEqual(0);
    })
    test('Should return 0 for empty string', () => {
        expect(vowelCount('')).toEqual(0);
    })
    test('Should return 0 for non string', () => {
        expect(vowelCount(123)).toEqual(0);
    })
});
