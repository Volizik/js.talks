const hammingDistance = require('./hammingDistance');

describe('hammingDistance', () => {
    test('Should return 3 for "I like turtles" and "I like turkeys"', () => {
        expect(hammingDistance("I like turtles", "I like turkeys")).toEqual(3);
    })
    test('Should return 0 for "Hello World" and "Hello World"', () => {
        expect(hammingDistance("Hello World", "Hello World")).toEqual(0);
    })
    test('Should return 2 for "espresso" and "Expresso"', () => {
        expect(hammingDistance("espresso", "Expresso")).toEqual(2);
    })
});
