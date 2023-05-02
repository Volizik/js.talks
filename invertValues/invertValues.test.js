const invertValues = require('./invertValues');

describe('invertValues', () => {
    test('Should return [-1,-2,-3,-4,-5] for [1,2,3,4,5]', () => {
        expect(invertValues([1,2,3,4,5])).toEqual([-1,-2,-3,-4,-5]);
    })
    test('Should return [-1,-2,3,-4,5] for [1,2,-3,4,-5]', () => {
        expect(invertValues([1,2,-3,4,-5])).toEqual([-1,-2,3,-4,5]);
    })
    test('Should return [] for []', () => {
        expect(invertValues([])).toEqual([]);
    })
});
