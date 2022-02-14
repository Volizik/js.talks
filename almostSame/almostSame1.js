// Create a function, that received 2 arguments, word and array of similar words
// You need compare word with each word in array, and find their similarity percent
// For example, there are 6 letters in the word "spider", of which 5 are equal to "ssider", so "ssider" is similar to "spider" by 83.3%
// For simplicity, the letters in the compared words should be in the same position.
// spider               spider
// ssider               sspider
// 101111               1000000
// 5 letters overlap    only 1 letter overlap

const getSimilarityPercent = (word, similarWords) => {
    // your code here...
    return similarWords.map((similarWord) => {
        let similarLetters = 0;
        [...word].forEach((letter, idx) => similarWord[idx] === letter && similarLetters++)
        return `${(similarLetters * 100 / Math.max(similarWord.length, word.length)).toFixed(1)}%`
    });
}

console.log(getSimilarityPercent('spider', ['ssider', 'spiders', 'asider', 'spidir', 'spiaer', 'sspider', 'ssspider']))
// ['83.3%', '85.7%', '66.7%', '83.3%', '83.3%', '14.3%', '12.5%' ]

module.exports = getSimilarityPercent;
