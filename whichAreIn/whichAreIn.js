// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Beware: r must be without duplicates.

// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

const whichAreIn = (a1, a2) => {
    // your code here...
    const filtered = a1.filter(
        (part) => a2.some((word) => word.includes(part)),
    );
    return [...new Set(filtered.sort())];
}

module.exports = whichAreIn;

