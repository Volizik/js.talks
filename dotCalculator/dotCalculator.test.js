const dotCalculator = require('./dotCalculator');

describe('dotCalculator', () => {
    test('Should success', () => {
        expect(dotCalculator("..... + ...............")).toEqual("....................");
        expect(dotCalculator("..... - ...")).toEqual("..");
        expect(dotCalculator("..... - .")).toEqual("....");
        expect(dotCalculator("..... * ...")).toEqual("...............");
        expect(dotCalculator("..... // ..")).toEqual("..");
        expect(dotCalculator(". // ..")).toEqual("");
        expect(dotCalculator(". - .")).toEqual("");
    })
});
