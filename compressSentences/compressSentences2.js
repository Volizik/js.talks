// new Set(array) creates collection of unique values. Duplicate values will be removed.

const compressSentences = (sentence) => {
        const words = sentence.toLowerCase().split(' ');
        const uniqueWords = [...new Set(words)];

        return words.map(word => uniqueWords.indexOf(word)).join('');
}

module.exports = compressSentences;
