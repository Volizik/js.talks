// EN
// If you are good at regular expressions, you can use them.
// But it's not recommended if your teem is not good enough in it.

// \b - Matches a word boundary
// () - Capturing group
// \s - Matches a single white space character
// \S - Matches a single character other than whitespace
// x+ - Matches the preceding item "x" 1 or more times
// \1 - Match the next character that is the same as the value of the first capturing group
// x(?=y) - Matches "x" only if "x" is followed by "y"

// RU
// Если вы знакомы с регулярными выражениями, можно использовать их.
// Но это может вызвать трудности у ваших коллег при чтении кода, если они не знакомы с регулярками

// \b - Граница слова
// Например: \bJava\b найдет слово "Java" в "It's Java", но не найдет в строке "It's Javascript")
// () - Обьединение в группу
// \s - Соответствует одному пробелу
// \S - Соответствует одному символу, отличному от пробела
// x+ - Соответствует предыдущему элементу "x" один или более раз
// \1 - Соответствует следующему символу, который совпадает со значением первой группы захвата
// x(?=y) - Соответствует "x", только если за "x" следует "y"

const removeConsecutiveDuplicates = s => s.replace(/\b(\S+)\s+(?=\1)\b/g, "");

module.exports = removeConsecutiveDuplicates;
