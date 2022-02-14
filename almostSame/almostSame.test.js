const almostSame1 = require('./almostSame1');

const params = ['spider', ['ssider', 'spiders', 'asider', 'spidir', 'spiaer', 'sspider', 'ssspider']];
const result = ['83.3%', '85.7%', '66.7%', '83.3%', '83.3%', '14.3%', '12.5%'];

describe('almostSame', () => {
    test('Testing returned value 1', () => {
        expect(almostSame1(...params)).toStrictEqual(result);
    })
});
