// Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.
// For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.
// To encrypt 'hello' you'd substitute as follows,
//               abcdefghijklmnopqrstuvwxyz
//   hello ==>   |||||||||||||||||||||||||| ==> bshhk
//               wednsaybcfghijklmopqrtuvxz
// hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.
// Good Luck.

const keywordCipher = (string, keyword) => {
    // your code here...
    if (/[^a-z]/.test(keyword)) return 'Keyword must have only letters';

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const keyArray = [...new Set(`${keyword}${alphabet}`)];

    return [...string.toLowerCase()]
        .map((letter) => keyArray[alphabet.indexOf(letter)] || letter)
        .join('');
    // return string.toLowerCase().replace(/[a-z]/g, letter => keyArray[alphabet.indexOf(letter)])
}

module.exports = keywordCipher;

keywordCipher('Welcome home', 'secret'); // wticljt dljt
keywordCipher('Welcome home123', 'secret'); // wticljt dljt123
keywordCipher('Welcome home', 'secret123'); // Keyword must have only letters
