const stringEndWith = (str, ending) => {
    // your code here...
    if (!str || !ending) return false;
    return `${str}`.endsWith(ending);
}

module.exports = stringEndWith;
