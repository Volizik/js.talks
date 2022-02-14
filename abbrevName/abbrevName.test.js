const abbrevName1 = require('./abbrevName1');

const params = 'Sam Harris';
const result = 'S.H';

describe('abbrevName', () => {
    test('Testing returned value 1', () => {
        expect(abbrevName1(params)).toEqual(result);
        expect(abbrevName1('test test')).toEqual('T.T');
    })
});
