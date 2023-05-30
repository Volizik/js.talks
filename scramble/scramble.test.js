const scramble = require('./scramble');

describe('scramble', () => {
    test('Should return true', () => {
        expect(scramble('rkqodlw','world')).toEqual(true);
        expect(scramble('cedewaraaossoqqyt', 'codewars')).toEqual(true);
        expect(scramble('scriptingjava', 'javascript')).toEqual(true);
    })
    test('Should return false', () => {
        expect(scramble('katas', 'steak'  )).toEqual(false);
        expect(scramble('scriptjavx', 'javascript')).toEqual(false);
        expect(scramble('scriptingjava')).toEqual(false);
        expect(scramble(undefined, 'scriptingjava')).toEqual(false);
    })
});
