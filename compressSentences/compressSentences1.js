// Your task is to make a program takes in a sentence (without punctuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

// Example
// "Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"
// becomes
// "01234567802856734"

// Another example
// "the one bumble bee one bumble the bee"
// becomes
// "01231203"

const compressSentences = (sentence) => {
    // your code here...
    const uniqWords = [];
    return sentence
        .toLowerCase()
        .split(' ')
        .map((word) => {
            if (!uniqWords.includes(word)) {
                uniqWords.push(word);
            }
            return word;
        })
        .map((word) => uniqWords.indexOf(word))
        .join('');
}

module.exports = compressSentences;
