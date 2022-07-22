const rcd1 = require('./1');
const rcd2 = require('./2');

const params = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
const expectedResult = "alpha beta gamma delta alpha beta gamma delta";

describe('removeConsecutiveDuplicates', () => {
    test('1', () => {
        expect(rcd1(params)).toEqual(expectedResult);
    });
    test('2', () => {
        expect(rcd2(params)).toEqual(expectedResult);
    });
});
