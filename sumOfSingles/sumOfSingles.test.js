const sumOfSingles = require('./sumOfSingles');

describe('sumOfSingles', () => {
    test('Should work', () => {
        expect(sumOfSingles([4, 5, 7, 5, 4, 8])).toEqual(15);
        expect(sumOfSingles([9, 10, 19, 13, 19, 13])).toEqual(19);
        expect(sumOfSingles([16, 0, 11, 4, 8, 16, 0, 11])).toEqual(12);
        expect(sumOfSingles([5, 10, 19, 13, 10, 13])).toEqual(24);
        expect(sumOfSingles([-5, 5, 10, 19, 13, 10, 13])).toEqual(19);
        expect(sumOfSingles([-5, 10, 19, 13, 10, 13])).toEqual(14);
    })
});
