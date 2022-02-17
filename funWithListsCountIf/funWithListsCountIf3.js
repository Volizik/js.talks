// Interesting solution but not obvious
// callback(head.data) returns boolean value and converts to number (0 or 1) because after it is "+"
// And then we call function again using recursion

const countIf = (head, callback) => {
    return head ? !!callback(head.data) + countIf(head.next, callback) : 0;
}

module.exports = countIf;
