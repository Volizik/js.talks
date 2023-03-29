require('./containsAll');

describe('containsAll', () => {
    test('Should return true', () => {
        expect([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([1,2,3,4,5])).toEqual(true);
        expect([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([9,2,5,4,10])).toEqual(true);
        expect([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([])).toEqual(true);
        expect([].containsAll([])).toEqual(true);
    })
    test('Should return false', () => {
        expect([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([12,15])).toEqual(false);
        expect([].containsAll([12,15])).toEqual(false);
    })
});
