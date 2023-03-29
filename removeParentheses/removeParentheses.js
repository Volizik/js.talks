// Remove the parentheses
// In this kata you are given a string for example:
// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.
// The example above would return: "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string.
// Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

const removeParentheses = (str) => {
    // your code here...
    const regExp = /\([^()]*\)/g;
    while (str.match(regExp)) {
        str = str.replaceAll(regExp, '');
    }
    return str;
}
// This regular expression finds all parentheses and everything that is wrapped in them.
// But only at the deepest level of nesting.
// For "(((abc)(cba))(test))" it will find only "(abc)", "(cba)" and "(test)".
// Parentheses wrapping other parentheses will be ignored.

module.exports = removeParentheses;
