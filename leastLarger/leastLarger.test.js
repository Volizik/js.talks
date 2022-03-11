const leastLarger1 = require('./leastLarger1');
const leastLarger2 = require('./leastLarger2');


describe('leastLarger', () => {
    test('found index', () => {
        expect(leastLarger1([4, 1, 3, 5, 6], 0)).toEqual(3);
        expect(leastLarger2([4, 1, 3, 5, 6], 0)).toEqual(3);
    })
    test('not found index', () => {
        expect(leastLarger1([4, 1, 3, 5, 6], 4)).toEqual(-1);
        expect(leastLarger2([4, 1, 3, 5, 6], 4)).toEqual(-1);
    })
    test('index greater then array length', () => {
        expect(leastLarger1([4, 1, 3, 5, 6], 6)).toEqual(-1);
        expect(leastLarger2([4, 1, 3, 5, 6], 6)).toEqual(-1);
    })
});
