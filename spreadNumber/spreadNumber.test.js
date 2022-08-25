const spreadNumber = require('./spreadNumber');

spreadNumber();

describe('spreadNumber', () => {
    test('[...5]', () => {
        expect([...5]).toEqual([1, 2, 3, 4, 5]);
    })
    test('[...0]', () => {
        expect([...0]).toEqual([]);
    })
});
