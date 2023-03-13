const keywordCipher = require('./keywordCipher');

describe('keywordCipher', () => {
    test('Should return "wticljt dljt" for "Welcome home", "secret"', () => {
        expect(keywordCipher("Welcome home", "secret")).toEqual("wticljt dljt");
    })
    test('Should return "wticljt dljt123" for "Welcome home123", "secret"', () => {
        expect(keywordCipher("Welcome home123", "secret")).toEqual("wticljt dljt123");
    })
    test('Should return "wt11!icljt123 dljt123" for "We11!lcome123 home123", "secret"', () => {
        expect(keywordCipher("We11!lcome123 home123", "secret")).toEqual("wt11!icljt123 dljt123");
    })
    test('Should return "Keyword must have only letters"', () => {
        expect(keywordCipher("Welcome home", "secret123")).toEqual("Keyword must have only letters");
    })
});
