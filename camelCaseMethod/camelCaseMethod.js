// Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces.
// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function() {
    //your code here
    if (this.length === 0) return '';
    return this
        .trim()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join('')
}
