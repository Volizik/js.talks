const multiply = (a, b) => {
    // your code here...
    if (
        typeof a !== 'string' ||
        typeof b !== 'string' ||
        isNaN(parseInt(a)) ||
        isNaN(parseInt(b))
    ) return null;

    return `${BigInt(a) * BigInt(b)}`;
}

module.exports = multiply;
