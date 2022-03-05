const unluckyDays1 = require('./unluckyDays1');
const unluckyDays2 = require('./unluckyDays2');

describe('unluckyDays', () => {
    test('For 2015', () => {
        expect(unluckyDays1(2015)).toEqual(3);
        expect(unluckyDays2(2015)).toEqual(3);
    })
    test('For 1986', () => {
        expect(unluckyDays1(1986)).toEqual(1);
        expect(unluckyDays2(1986)).toEqual(1);
    })
    test('year < 0', () => {
        expect(unluckyDays1(-21)).toEqual(null);
        expect(unluckyDays2(-21)).toEqual(null);
    })
    test('year is 0', () => {
        expect(unluckyDays1(0)).toEqual(2);
        expect(unluckyDays2(0)).toEqual(2);
    })
    test('year is undefined', () => {
        expect(unluckyDays1()).toEqual(null);
        expect(unluckyDays2()).toEqual(null);
    })
});
