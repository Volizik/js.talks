// Using method .replace() with regular expression we could change any letter in our sentence.
// In this case "^." means any first symbol except line break.
// ^ - Matches the first letter of the string
// . - Matches any single character except line breaker like '\n' and '\r'

const sentencify = (words = []) => {
    if (!words.length) return null;

    return `${words.join(' ').replace(/^./,letter => letter.toUpperCase())}.`
}

module.exports = sentencify;
