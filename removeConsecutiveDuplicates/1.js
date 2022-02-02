//Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = (s) => {
    // your perfect code...
    return s
        .split(' ')
        .filter((value, index, array) => value !== array[index - 1])
        .join(' ');
}

module.exports = removeConsecutiveDuplicates;
