const validParentheses = require('./validParentheses');

describe('validParentheses', () => {
    test('Should return true', () => {
        expect(validParentheses("()")).toEqual(true);
        expect(validParentheses("()()(())")).toEqual(true);
    })
    test('Should return false', () => {
        expect(validParentheses("())")).toEqual(false);
        expect(validParentheses("()()((())")).toEqual(false);
        expect(validParentheses(")()()(())")).toEqual(false);
        expect(validParentheses("()()(()))(")).toEqual(false);
        expect(validParentheses("(")).toEqual(false);
        expect(validParentheses("()())(")).toEqual(false);
    })
    test('Should return "Parameter must be a string"', () => {
        expect(validParentheses(0)).toEqual("Parameter must be a string");
        expect(validParentheses(true)).toEqual("Parameter must be a string");
        expect(validParentheses()).toEqual("Parameter must be a string");
    })
});
