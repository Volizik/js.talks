const ArmstrongNumber = require('./ArmstrongNumber');

describe('ArmstrongNumber', () => {
    test('Should return true', () => {
        expect(ArmstrongNumber(1)).toEqual(true);
        expect(ArmstrongNumber(2)).toEqual(true);
        expect(ArmstrongNumber(3)).toEqual(true);
        expect(ArmstrongNumber(4)).toEqual(true);
        expect(ArmstrongNumber(5)).toEqual(true);
        expect(ArmstrongNumber(6)).toEqual(true);
        expect(ArmstrongNumber(7)).toEqual(true);
        expect(ArmstrongNumber(8)).toEqual(true);
        expect(ArmstrongNumber(9)).toEqual(true);
        expect(ArmstrongNumber(153)).toEqual(true);
        expect(ArmstrongNumber(370)).toEqual(true);
        expect(ArmstrongNumber(1634)).toEqual(true);
    })
    test('Should return false', () => {
        expect(ArmstrongNumber()).toEqual(false);
        expect(ArmstrongNumber(0)).toEqual(false);
        expect(ArmstrongNumber(1652)).toEqual(false);
    })
});
