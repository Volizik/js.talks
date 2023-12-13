const arrCheck = require('./arrCheck');

describe('arrCheck', () => {
    test('Tests to see if your function returns the correct values', () => {
        expect(arrCheck([])).toEqual(true);
        expect(arrCheck([['string']])).toEqual(true);
        expect(arrCheck([[],{}])).toEqual(false);
        expect(arrCheck([[1],[2],[3]])).toEqual(true);
        expect(arrCheck(['A', 'R', 'R', 'A', 'Y'])).toEqual(false);
    })
});
