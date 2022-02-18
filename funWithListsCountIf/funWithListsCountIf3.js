// Interesting solution, but not obvious
// callback(head.data) returns a boolean and converts it to a number (0 or 1) because there is a "+" after it
// And then we call function again using recursion

const countIf = (head, callback) => {
    return head ? !!callback(head.data) + countIf(head.next, callback) : 0;
}

module.exports = countIf;
