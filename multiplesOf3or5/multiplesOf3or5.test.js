const multiplesOf3or5 = require('./multiplesOf3or5');

describe('multiplesOf3or5', () => {
    test('Should return true', () => {
        expect(multiplesOf3or5(10)).toEqual(23);
        expect(multiplesOf3or5(15)).toEqual(45);
        expect(multiplesOf3or5(16)).toEqual(60);
        expect(multiplesOf3or5(17)).toEqual(60);
        expect(multiplesOf3or5(-17)).toEqual(0);
    })
});
