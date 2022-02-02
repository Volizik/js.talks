const mt1 = require('./1');
const mt2 = require('./2');

const params = 3;
const result = [[1,2,3],[2,4,6],[3,6,9]]

describe('multiplicationTable', () => {
    test('1', () => {
        expect(mt1(params)).toStrictEqual(result)
    })
    test('2', () => {
        expect(mt2(params)).toStrictEqual(result)
    })
})
