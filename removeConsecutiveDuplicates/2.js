// If you are good at regular expressions, you can use them.
// But it's not recommended if your teem is not good enough in it.

// \b - Matches a word boundary
// () - Capturing group
// \s - Matches a single white space character
// \S - Matches a single character other than white space
// x+ - Matches the preceding item "x" 1 or more times
// \1 - Match the next character that is the same as the value of the first capturing group
// x(?=y) - Matches "x" only if "x" is followed by "y"

const removeConsecutiveDuplicates = s => s.replace(/\b(\S+)\s+(?=\1\b)/g, "");

module.exports = removeConsecutiveDuplicates;
