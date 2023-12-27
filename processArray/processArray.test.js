const processArray = require('./processArray');

const error = 'Expecting array of numbers and callback';

describe('processArray', () => {
    test('Testing with wrong params', () => {
        expect(() => processArray('test', (a) => a * 2)).toThrow(error);
        expect(() => processArray(undefined, (a) => a * 2)).toThrow(error);
        expect(() => processArray([1,2,3])).toThrow(error);
    });
    test('Testing with right params', () => {
        expect(processArray([1 ,2, 3], (a) => a * 2)).toEqual([2,4,6]);
        expect(processArray([1, 2, 3], (a) => a / 2)).toEqual([0.5,1,1.5]);
        expect(processArray([1, 2, 3], (a) => a + 2)).toEqual([3,4,5]);
        expect(processArray([1, 2, 3], (a) => a - 2)).toEqual([-1,0,1]);
    });
});
