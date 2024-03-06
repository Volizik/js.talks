// Your job is to group the words in anagrams.
// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.
//
// Example
// Input
// ["tsar", "rat", "tar", "star", "tars", "cheese"]
//
// Output
// [["tsar", "star", "tars"], ["rat", "tar"], ["cheese"]]

const groupAnagram = (words) => {
    // your code here...

    // const result = {};
    //
    // words.forEach((word) => {
    //     const key = [...word].sort().join('');
    //     result[key] = (result[key] || []).concat([word]);
    // });
    //
    // return Object.values(result);

    // Even better using ES2023 syntax
    const obj = Object.groupBy(words, (word) => {
        return [...word].sort().join('');
    });

    return Object.values(obj);
}

console.log(groupAnagram(["tsar", "rat", "tar", "star", "tars", "cheese"]))

module.exports = groupAnagram;
