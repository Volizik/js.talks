// Your job is to write a function that will find the secret words of the message and return them in order.
// The words in the secret message should be ordered in the order in which they are found as a duplicate, for example:
// 'This is a test. this test is fun.' // --> 'this test is'
// Notes
// The input will always be a string.
// If the random tests repeat a word multiple times, it should show up in the secret message only once, based on the position of the first time it was duplicated.
// The punctuation and casing of words (uppercase, lowercase) should not matter for the purpose of this kata. We are only concerned with word duplication.

const findSecretMessage = (paragraph) => {
    // your code here...
    if (typeof paragraph !== 'string') return '';
    const words = paragraph.toLowerCase().split(/\W+/);
    return words.filter((word, position) => {
        const firstOccurrence = words.indexOf(word);
        const secondOccurrence = words.indexOf(word, firstOccurrence + 1);
        return secondOccurrence === position;
    }).join(' ');
}

module.exports = findSecretMessage;
