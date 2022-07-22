const stray1 = require('./1');

const params = [1, 1, 2];
const result = 2;

describe('stray', () => {
    test('1', () => {
        expect(stray1(params)).toEqual(result);
    })
})
