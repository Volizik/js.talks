const selReverse = require('./selReverse');

describe('selReverse', () => {
    test('Should return [2,1, 4,3, 6,5] for [1,2,3,4,5,6], 2', () => {
        expect(selReverse([1,2,3,4,5,6], 2)).toEqual([2,1, 4,3, 6,5]);
    })
    test('Should return [ 4, 2, 8, 6, 12, 10, 16, 14 ] for [ 2, 4, 6, 8, 10, 12, 14, 16 ], 2', () => {
        expect(selReverse([ 2, 4, 6, 8, 10, 12, 14, 16 ], 2)).toEqual([ 4, 2, 8, 6, 12, 10, 16, 14 ]);
    })
    test('Should return [6,4,2, 12,10,8, 16,14] for [2,4,6,8,10,12,14,16], 3', () => {
        expect(selReverse([2,4,6,8,10,12,14,16], 3)).toEqual([6,4,2, 12,10,8, 16,14]);
    })
    test('Should return [2,4,6,8,10,12,14,16] for [2,4,6,8,10,12,14,16], 0', () => {
        expect(selReverse([2,4,6,8,10,12,14,16], 0)).toEqual([2,4,6,8,10,12,14,16]);
    })
    test('Should return [2,4,6,8,10,12,14,16] for [2,4,6,8,10,12,14,16], 1', () => {
        expect(selReverse([2,4,6,8,10,12,14,16], 1)).toEqual([2,4,6,8,10,12,14,16]);
    })
});
