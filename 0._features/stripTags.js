// Useful regular expression if you need to get rid of tags in text
// () - capture group
// (<()>) - match symbols "<", ">", and something in capture group between them
// [^>]+ - match any single character except ">", "+" matches the previous token from list unlimited times
// g - global modifier. All matches (don't return after first match)

const stripTagsRegExp = new RegExp(/(<([^>]+)>)/g);

const str = '<p>Hello <strong>world</strong>!</p>';

str.replace(stripTagsRegExp, ''); // 'Hello world!'
