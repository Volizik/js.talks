require('./camelCaseMethod');

describe('camelCaseMethod', () => {
    test('Should return "HelloCase" for "hello case"', () => {
        expect("hello case".camelCase()).toEqual('HelloCase');
    })
    test('Should return "" for ""', () => {
        expect("".camelCase()).toEqual('');
    })
    test('Should return "HelloCase" for " hello case "', () => {
        expect(" hello case ".camelCase()).toEqual('HelloCase');
    })
});
