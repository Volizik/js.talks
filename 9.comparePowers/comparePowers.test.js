const comparePowers1 = require('./comparePowers1');

describe('comparePowers', () => {
    test('Should return 1', () => {
        expect(comparePowers1([2,100],[2,150])).toEqual(1);
    })
    test('Should return -1', () => {
        expect(comparePowers1([3,9],[5,6])).toEqual(-1);
    })
    test('Should return 0', () => {
        expect(comparePowers1([2,10],[2,10])).toEqual(0);
    })
    test('Should return undefined', () => {
        expect(comparePowers1([2,-10],[2,15])).toBeUndefined();
    })
    test('Should return -1', () => {
        expect(comparePowers1([442711186, 112216963],[164134802, 100750452])).toEqual(-1);
    })
});
