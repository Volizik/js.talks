const spinWords = require('./spinWords');

describe('spinWords', () => {
    test('Should be passed', () => {
        expect(spinWords("Welcome")).toEqual("emocleW");
        expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw");
        expect(spinWords("This is a test")).toEqual("This is a test");
        expect(spinWords("This is another test")).toEqual("This is rehtona test");
    })
});
