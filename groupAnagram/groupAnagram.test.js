const groupAnagram = require('./groupAnagram');

describe('groupAnagram', () => {
    test('Should return array of grouped anagrams', () => {
        expect(groupAnagram(["rat", "tar", "star"])).toEqual([["rat", "tar"], ["star"]]);
        expect(groupAnagram(["tsar", "rat", "tar", "star", "tars", "cheese"])).toEqual([
            ["tsar", "star", "tars"],
            ["rat", "tar"],
            ["cheese"]
        ]);
    })
});
