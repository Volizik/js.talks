const indexCapitalization = require('./indexCapitalization');

describe('indexCapitalization', () => {
    test('Should be true', () => {
        expect(indexCapitalization("abcdef",[1,2,5])).toEqual("aBCdeF");
        expect(indexCapitalization("abcdef",[1,2,5, 100])).toEqual("aBCdeF");
    })
});
