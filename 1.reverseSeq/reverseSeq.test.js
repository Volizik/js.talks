const rs1 = require('./1');
const rs2 = require('./2');
const rs3 = require('./3');
const rs4 = require('./4');

const params = 5;
const expectedResult = [5, 4, 3, 2, 1];

describe('Reverse sequence', () => {
    test('1', () => {
        expect(rs1(params)).toStrictEqual(expectedResult);
    });

    test('2', () => {
        expect(rs2(params)).toStrictEqual(expectedResult);
    });

    test('3', () => {
        expect(rs3(params)).toStrictEqual(expectedResult);
    });

    test('4', () => {
        expect(rs4(params)).toStrictEqual(expectedResult);
    })
})
