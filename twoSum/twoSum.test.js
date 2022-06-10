const twoSum1 = require('./twoSum1');
const twoSum2 = require('./twoSum2');

describe('twoSum', () => {
    test('Must return array of two indexes', () => {
        expect(twoSum1([1,2,3], 4)).toStrictEqual([0, 2]);
        expect(twoSum1([1234,5678,9012], 14690)).toStrictEqual([1, 2]);
        expect(twoSum2([1,2,3], 4)).toStrictEqual([0, 2]);
        expect(twoSum2([1234,5678,9012], 14690)).toStrictEqual([1, 2]);
    })
    test('If contains less then 2 elements', () => {
        expect(() => twoSum1([], 4)).toThrow('Array must have at least 2 numbers, and contain only numbers');
        expect(() => twoSum1([4], 4)).toThrow('Array must have at least 2 numbers, and contain only numbers');
        expect(() => twoSum2([], 4)).toThrow('Array must have at least 2 numbers, and contain only numbers');
        expect(() => twoSum2([4], 4)).toThrow('Array must have at least 2 numbers, and contain only numbers');
    })
    test('If array contains not only numbers', () => {
        expect(() => twoSum1([4, 'test', true], 4)).toThrow('Array must have at least 2 numbers, and contain only numbers');
        expect(() => twoSum2([4, 'test', true], 4)).toThrow('Array must have at least 2 numbers, and contain only numbers');
    })
    test('If array doesn\'t contain sum of two numbers equal to target', () => {
        expect(twoSum1([1, 2], 4)).toBeUndefined();
        expect(twoSum2([1, 2], 4)).toBeUndefined();
    })
});
