const deleteNth = require('./deleteNth');

describe('deleteNth', () => {
    test('Should return array with max 1 repeating numbers', () => {
        expect(deleteNth([20,37,20,21], 1)).toEqual([20,37,21]);
        expect(deleteNth([12,39,19,39,39,19,12], 1)).toEqual([12, 39, 19]);
    })
    test('Should return array with max 3 repeating numbers', () => {
        expect(deleteNth([1,1,3,3,7,2,2,2,2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2]);
    })
    test('Without second argument', () => {
        expect(deleteNth([1,1,3,3,7,2,2,2,2])).toEqual([1,1,3,3,7,2,2,2,2]);
    })
});
