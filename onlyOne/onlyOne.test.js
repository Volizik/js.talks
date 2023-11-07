const onlyOne = require('./onlyOne');

describe('onlyOne', () => {
    test('Should return true', () => {
        expect(onlyOne(true)).toEqual(true);
        expect(onlyOne(true, false, false)).toEqual(true);
        expect(onlyOne(false, false, true, false, false)).toEqual(true);
    })
    test('Should return false', () => {
        expect(onlyOne()).toEqual(false);
        expect(onlyOne(false, false, false)).toEqual(false);
        expect(onlyOne(true, false, false, true)).toEqual(false);
    })
});
