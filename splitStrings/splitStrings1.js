// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

const splitStrings = (str) => {
    // your code here...
    if (!str || str.length === 0) return [];

    return Array.from(str, (letter, idx) => {
        const nextLetter = str[idx + 1];

        return idx % 2 !== 0 ? '' : nextLetter ? `${letter}${nextLetter}` : `${letter}_`;
    }).filter(Boolean);
}

module.exports = splitStrings;
