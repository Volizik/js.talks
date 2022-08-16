const findOdd = require('./findOdd');

const params = '';
const result = '';

describe('findOdd', () => {
    test('Should return 5', () => {
        expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toEqual(5);
    })
    test('Should return 4', () => {
        expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4);
    })
    test('Should return 2', () => {
        expect(findOdd([1,1,2,3,3,2,2])).toEqual(2);
    })
    test('Should return undefined', () => {
        expect(findOdd()).toBeUndefined();
    })
});
