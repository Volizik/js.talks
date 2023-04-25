const simplify = require('./simplify');

describe('simplify', () => {
    test('Should succeed', () => {
        expect(simplify(8964631)).toEqual("8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1");
        expect(simplify(660)).toEqual("6*100+6*10");
        expect(simplify(56)).toEqual("5*10+6");
        expect(simplify(600)).toEqual("6*100");
        expect(simplify(8)).toEqual("8");
    })
    test('Should fail', () => {
        expect(() => simplify()).toThrow('Argument must be an integer');
        expect(() => simplify('123')).toThrow('Argument must be an integer');
        expect(() => simplify(101.35)).toThrow('Argument must be an integer');
    })
});
