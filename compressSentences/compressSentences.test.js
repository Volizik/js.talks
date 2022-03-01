const compressSentences1 = require('./compressSentences1');
const compressSentences2 = require('./compressSentences2');

const params = 'Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country';
const result = '01234567802856734';

describe('compressSentences', () => {
    test('Testing returned value 1', () => {
        expect(compressSentences1(params)).toEqual(result);
    });
    test('Testing returned value 2', () => {
        expect(compressSentences2(params)).toEqual(result);
    });
});
