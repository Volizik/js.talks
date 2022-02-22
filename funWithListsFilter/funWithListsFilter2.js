const convertToArray = (head) => {
    return head ? [head.data, ...convertToArray(head.next)] : [];
}

const filter = (list, callback) => {
    return convertToArray(list)
        .filter(callback)
        .reverse()
        .reduce((prev, curr) => ({ data: curr, next: prev }), null);
}

module.exports = filter;
