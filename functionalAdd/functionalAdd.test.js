const functionalAdd = require('./functionalAdd');

describe('functionalAdd', () => {
    test('Should add', () => {
        expect(functionalAdd(1)(3)).toEqual(4);
        expect(functionalAdd(2)(3)).toEqual(5);
        expect(functionalAdd(2)(8)).toEqual(10);
        expect(functionalAdd(-1)(8)).toEqual(7);
    })
});
