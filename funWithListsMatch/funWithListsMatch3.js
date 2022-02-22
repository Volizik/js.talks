const anyMatch = (head, callback) => {
    return head ? !!callback(head.data) || anyMatch(head.next, callback) : false;
}

const allMatch = (head, callback) => {
    return head ? !!callback(head.data) && allMatch(head.next, callback) : true;
}

module.exports = {
    anyMatch, allMatch
};
