const maskify = require('./maskify');

describe('maskify', () => {
    test('Should work', () => {
        expect(maskify("4556364607935616")).toEqual("############5616");
        expect(maskify("64607935616")).toEqual("#######5616");
        expect(maskify('1')).toEqual("1");
        expect(maskify('')).toEqual("");
    })
});
