const whichAreIn = require('./whichAreIn');
const whichAreIn2 = require('./whichAreIn2');

const a = ["arp", "live", "strong"];
const b = ["lively", "alive", "harp", "sharp", "armstrong"];

describe('whichAreIn', () => {
    test('Should return array like "a"', () => {
        expect(whichAreIn(a, b)).toEqual(a);
        expect(whichAreIn2(a, b)).toEqual(a);
    })
    test('Should return empty array', () => {
        expect(whichAreIn(["tarp", "mice", "bull"], b)).toEqual([]);
        expect(whichAreIn2(["tarp", "mice", "bull"], b)).toEqual([]);
    })
    test('Should return array with unique values', () => {
        expect(whichAreIn([...a, "arp"], b)).toEqual(a);
        expect(whichAreIn2([...a, "arp"], b)).toEqual(a);
    })
});
