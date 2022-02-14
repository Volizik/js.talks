const getMiddle1 = require('./getMiddle1');

describe('getMiddle', () => {
    test('test', () => {
        expect(getMiddle1('test')).toEqual('es');
    })
    test('testing', () => {
        expect(getMiddle1('testing')).toEqual('t');
    })
    test('middle', () => {
        expect(getMiddle1('middle')).toEqual('dd');
    })
    test('A', () => {
        expect(getMiddle1('A')).toEqual('A');
    })
});
