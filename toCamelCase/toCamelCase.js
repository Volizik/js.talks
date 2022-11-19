// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// [a-zA-Z0-9] match only symbols from "a" to "z", from "A" to "Z" and from 0 to 9
// [^a-zA-Z0-9] match any symbol except symbols range we write
// [^a-zA-Z0-9]+ match any symbol except symbols range we write one or unlimited times: "The - Stealth" match " - ", with spaces
// (.) match any character and wrap it into group
// So /[^a-zA-Z0-9]+(.)/ means that we want to find any symbols except ranges we write, but only if after this symbols we meet any symbol from ranges(a-z, A-Z, 0-9). This symbol also will be included. For example:
// "the -_ _  stealth )+- warrior" ---> " -_ _  s", " )+- w".

// DESCRIPTION:
// A little explanation about the code I've written:
// As you know method .replace() expect two arguments. First must be string or regular expression, and second must be string or function.
// If we put function as a second argument - it will be invoked for every match, receive substring matched by pattern, and must return string that will be used as a replacement text.
// So we figured out that if we have string like that "the-stealth-warrior", function will invoke twice with parameters "-s" and "-w". Then we invoke replace method for this substrings, and change any symbols except symbols in ranges(a-z, A-Z, 0-9) to empty string. Then we call .toUpperCase() for the remaining characters "s" and "w"

const toCamelCase = (str) => {
    // your code here...
    if (!str || typeof str !== 'string') return '';
    return str.replace(
        /[^a-zA-Z0-9]+(.)/g,
        (char) => char.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
    )
}

module.exports = toCamelCase;
