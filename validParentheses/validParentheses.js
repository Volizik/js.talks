// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

const validParentheses = (parens) => {
    // your code here...
    if (typeof parens !== 'string') return 'Parameter must be a string';
    if (parens.startsWith(')')) return false;

    const result = [];

    for (let i = 0, length = parens.length; i < length; i++) {
        if (parens[i] === '(') result.push(parens[i]);
        else if (!result.pop()) return false;
    }
    return result.length === 0;
    // while (parens.includes('()')) {
    //     parens = parens.replace('()','')
    // }
    // return parens.length === 0;
}

module.exports = validParentheses;
