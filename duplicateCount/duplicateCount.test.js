const duplicateCount1 = require('./duplicateCount1');

const params = '';
const result = '';

describe('duplicateCount', () => {
    test('Should return 0', () => {
        expect(duplicateCount1('')).toEqual(0);
        expect(duplicateCount1('abcde')).toEqual(0);
    })
    test('Should return 2', () => {
        expect(duplicateCount1('aabbcde')).toEqual(2);
    })
    test('Should ignore case', () => {
        expect(duplicateCount1('aabBcde')).toEqual(2);
    })
    test('Should not be adjacent', () => {
        expect(duplicateCount1('Indivisibilities')).toEqual(2);
    })
});
