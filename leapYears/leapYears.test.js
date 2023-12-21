const leapYears = require('./leapYears');

const error = 'Argument must be a number'

describe('leapYears', () => {
    test('Check if it leap year', () => {
        expect(leapYears(2020)).toEqual(true);
        expect(leapYears(2024)).toEqual(true);
        expect(leapYears(2000)).toEqual(true);
        expect(leapYears(2015)).toEqual(false);
        expect(leapYears(2100)).toEqual(false);
    })
    test('Receiving an error', () => {
        expect(() => leapYears()).toThrow(error);
        expect(() => leapYears('2024')).toThrow(error);
        expect(() => leapYears('test')).toThrow(error);
    })
});
