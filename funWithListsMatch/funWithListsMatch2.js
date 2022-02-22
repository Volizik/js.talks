const convertToArray = (head) => {
    return head ? [head.data, ...convertToArray(head.next)] : [];
}

const anyMatch = (head, callback) => {
    return convertToArray(head).some(callback);
}

// It may come as a bit of a surprise, but the .every() method returns true for any condition if array is empty. Keep in mind ;)
const allMatch = (head, callback) => {
    return convertToArray(head).every(callback);
}

module.exports = {
    anyMatch, allMatch
};
