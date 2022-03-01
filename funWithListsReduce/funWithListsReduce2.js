const reduce = (list, callback, initialValue) => {
    if (!list) return initialValue;
    return reduce(list.next, callback, callback(initialValue, list.data));
}

module.exports = reduce;
