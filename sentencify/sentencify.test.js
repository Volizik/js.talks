const sentencify1 = require('./sentencify1');
const sentencify2 = require('./sentencify2');

const params = ["this","is","a","sentence"];
const result = 'This is a sentence.';

describe('sentencify', () => {
    test('Testing returned value 1', () => {
        expect(sentencify1(params)).toEqual(result);
        expect(sentencify2(params)).toEqual(result);
    })
    test('with empty arr', () => {
        expect(sentencify1([])).toEqual(null);
        expect(sentencify2([])).toEqual(null);
    })
    test('with number first', () => {
        expect(sentencify1([5, 'test'])).toEqual('5 test.');
        expect(sentencify2([5, 'test'])).toEqual('5 test.');
    })
});
