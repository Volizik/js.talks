const moveZeros = require('./moveZeros');
const moveZeros1 = require('./moveZeros1');

const params = [false,1,0,1,2,0,1,3,"a"];
const result = [false,1,1,2,1,3,"a",0,0];

describe('moveZeros', () => {
    test('Should return [false,1,1,2,1,3,"a",0,0] for [false,1,0,1,2,0,1,3,"a"]', () => {
        expect(moveZeros(params)).toEqual(result);
        expect(moveZeros1(params)).toEqual(result);
    })
});
