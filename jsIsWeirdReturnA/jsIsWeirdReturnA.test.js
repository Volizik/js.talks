const jsIsWeirdReturnA1 = require('./jsIsWeirdReturnA1');

describe('jsIsWeirdReturnA', () => {
    test('Returned value must be "a"', () => {
        expect(jsIsWeirdReturnA1()).toEqual('a');
    })
    // test not working
    test('Should not contain other characters beside +()[]=!', () => {
        const fn = jsIsWeirdReturnA1.toString();
        const fnBody = fn.substring(fn.indexOf(">") + 1).trim();
        expect(fnBody).toMatch(/[+()\[\]=!]/);
    })
});
