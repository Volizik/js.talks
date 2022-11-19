const toCamelCase = require('./toCamelCase');

describe('toCamelCase', () => {
    test('Should return theStealthWarrior for "the-stealth-warrior"', () => {
        expect(toCamelCase("the-stealth-warrior")).toEqual("theStealthWarrior");
    })
    test('Should return TheStealthWarrior for "The-Stealth_Warrior"', () => {
        expect(toCamelCase("The-Stealth_Warrior")).toEqual("TheStealthWarrior");
    })
    test('Should return TheStealthWarrior for "The- Stealth_Warrior"', () => {
        expect(toCamelCase("The- Stealth_Warrior")).toEqual("TheStealthWarrior");
    })
    test('Should return TheStealthWarrior for "The -_ _  stealth \'\'- warrior"', () => {
        expect(toCamelCase("The -_ _  stealth ''- warrior")).toEqual("TheStealthWarrior");
    })
    test('Should return "" for non string value', () => {
        expect(toCamelCase("")).toEqual("");
        expect(toCamelCase(123)).toEqual("");
        expect(toCamelCase()).toEqual("");
        expect(toCamelCase(NaN)).toEqual("");
    })
});
