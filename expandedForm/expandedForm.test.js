const expandedForm = require('./expandedForm');

describe('expandedForm', () => {
    test('Tests', () => {
        expect(expandedForm(12)).toEqual('10 + 2');
        expect(expandedForm(42)).toEqual('40 + 2');
        expect(expandedForm(70304)).toEqual('70000 + 300 + 4');
        expect(expandedForm(70300)).toEqual('70000 + 300');
    })
});
