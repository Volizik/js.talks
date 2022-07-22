const arrayDiff1 = require('./arrayDiff1');

const params = '';
const result = '';

describe('arrayDiff', () => {
    test('Must return filtered array', () => {
        expect(arrayDiff1([1, 2, 3, 4, 4, 4, 5, 3, 3, 2], [4, 5])).toEqual([1, 2, 3, 3, 3, 2]);
    })
});
