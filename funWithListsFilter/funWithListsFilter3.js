// And of course using recursion

const filter = (list, callback) => {
    if (!list) return null;
    if (!callback(list.data)) return filter(list.next, callback);
    return {data: list.data, next: filter(list.next, callback)}
}

module.exports = filter;
