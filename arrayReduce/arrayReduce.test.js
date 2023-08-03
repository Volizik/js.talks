require('./arrayReduce');

describe('arrayReduce', () => {
    test('Should return [result] for [params]', () => {
        expect([0,1,2].reduce((a,n) => a+n)).toEqual(3);
        expect([0,1,2].reduce((a, n) => [...a, n*2], [])).toEqual([0, 2, 4]);
    })
});
