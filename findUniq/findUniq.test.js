const findUniq = require('./findUniq');

describe('findUniq', () => {
    test('Should return 2 for [ 1, 1, 1, 2, 1, 1 ]', () => {
        expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).toEqual(2);
    })
    test('Should return 0.5 for [ 1, 1, 1, 1, 1 , 0.5]', () => {
        expect(findUniq([ 1, 1, 1, 1, 1 , 0.5])).toEqual(0.5);
    })
});
