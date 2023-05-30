const numbersOfLetters = require('./numbersOfLetters');

describe('numbersOfLetters', () => {
    test('Should succeed', () => {
        expect(numbersOfLetters(1)).toEqual(["one", "three", "five", "four"]);
        expect(numbersOfLetters(12)).toEqual(["onetwo", "six", "three", "five", "four"]);
        expect(numbersOfLetters(37)).toEqual(["threeseven", "onezero", "seven", "five", "four"]);
        expect(numbersOfLetters(311)).toEqual(["threeoneone", "oneone", "six", "three", "five", "four"]);
    })
});
