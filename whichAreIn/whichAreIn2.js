const whichAreIn = (a1, a2) => {
    // your code here...
    const str = a2.join(',');
    const filtered = a1.filter((part) => str.includes(part));

    return [...new Set(filtered.sort())];
}

module.exports = whichAreIn;
