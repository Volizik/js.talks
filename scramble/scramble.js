// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> true
// scramble('cedewaraaossoqqyt', 'codewars') ==> true
// scramble('katas', 'steak') ==> false

const scramble = (str1, str2) => {
    const lettersMap = {};

    [...str1].forEach((letter) => {
        lettersMap[letter] = (lettersMap[letter] || 0) + 1;
    });

    return [...str2].every((letter) => lettersMap[letter]--);
}

module.exports = scramble;
