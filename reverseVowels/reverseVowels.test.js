const reverseVowels = require('./reverseVowels');

describe('reverseVowels', () => {
    test('Should be passed', () => {
        expect(reverseVowels('Hello!')).toEqual('Holle!');
        expect(reverseVowels('Tomatoes')).toEqual('Temotaos');
        expect(reverseVowels('Reverse Vowels In A String')).toEqual('RivArsI Vewols en e Streng');
        expect(reverseVowels('Oh my goodness')).toEqual('eh my goodnOss');
    })
});
