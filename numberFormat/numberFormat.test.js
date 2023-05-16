const numberFormat = require('./numberFormat');

describe('numberFormat', () => {
    test('Should return 100,000 for 100000', () => {
        expect(numberFormat(100000)).toEqual('100,000');
    })
    test('Should return 5,678,545 for 5678545', () => {
        expect(numberFormat(5678545)).toEqual('5,678,545');
    })
    test('Should return -678,545 for -678545', () => {
        expect(numberFormat(-678545)).toEqual('-678,545');
    })
});
