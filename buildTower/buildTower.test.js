const buildTower1 = require('./buildTower1');
const buildTower2 = require('./buildTower2');

const one = ['*']
const six = [
    "     *     ",
    "    ***    ",
    "   *****   ",
    "  *******  ",
    " ********* ",
    "***********"
];

describe('buildTower', () => {
    test('1 floor', () => {
        expect(buildTower1(1)).toStrictEqual(one);
        expect(buildTower2(1)).toStrictEqual(one);
    })
    test('6 floors', () => {
        expect(buildTower1(6)).toStrictEqual(six);
        expect(buildTower2(6)).toStrictEqual(six);
    })
    test('-1 floor', () => {
        expect(buildTower1(-1)).toStrictEqual([]);
        expect(buildTower2(-1)).toStrictEqual([]);
    })
    test('null floors', () => {
        expect(buildTower1(null)).toStrictEqual([]);
        expect(buildTower2(null)).toStrictEqual([]);
    })
});
