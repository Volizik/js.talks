const findDup = require('./findDup');

describe('findDup', () => {
    test('Should be success', () => {
        expect(findDup([1,2,2,3])).toEqual(2);
        expect(findDup([1,3,2,5,4,5,7,6])).toEqual(5);
    })
});
