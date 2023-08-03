const primeFactors = require('./primeFactors');

describe('primeFactors', () => {
    test('Should be passed', () => {
        expect(primeFactors(1)).toEqual([]);
        expect(primeFactors(3)).toEqual([3]);
        expect(primeFactors(8)).toEqual([2,2,2]);
        expect(primeFactors(12)).toEqual([2,2,3]);
        expect(primeFactors(315)).toEqual([3,3,5,7]);
    })
});
