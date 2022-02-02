const sm1 = require('./1');
const sm2 = require('./2');
const sm3 = require('./3');
const sm4 = require('./4');

const params = [12, 6, 1, 4, 9, 22];
const result = 5

describe('sumTwoSmallestNumbers', () => {
    test('1', () => {
        expect(sm1(params)).toEqual(result)
    })
    test('2', () => {
        expect(sm2(params)).toEqual(result)
    })
    test('3', () => {
        expect(sm3(params)).toEqual(result)
    })
    test('4', () => {
        expect(sm4(params)).toEqual(result)
    })
})
