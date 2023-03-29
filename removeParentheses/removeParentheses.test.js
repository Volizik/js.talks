const removeParentheses = require('./removeParentheses');

const params = 'example(unwanted thing)example';
const result = 'exampleexample';

describe('removeParentheses', () => {
    test('Should return "exampleexample" for "example(unwanted thing)example"', () => {
        expect(removeParentheses(params)).toEqual(result);
    })
    test('Should return "a" for "a(b(c))"', () => {
        expect(removeParentheses("a(b(c))")).toEqual('a');
    })
    test('Should return "  " for "(first group) (second group) (third group)"', () => {
        expect(removeParentheses("(first group) (second group) (third group)")).toEqual('  ');
    })
    test('Should return "" for "(((abc)(cba))(test))"', () => {
        expect(removeParentheses("(((abc)(cba))(test))")).toEqual('');
    })
});
