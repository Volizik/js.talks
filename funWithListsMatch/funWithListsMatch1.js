// Implement the methods anyMatch & allMatch, which accepts a linked list (head) and a predicate function, and returns true if any / all of the elements apply to the given predicate.

// For example:
// Given the list: 1 -> 2 -> 3, and the predicate x => x > 1, anyMatch  should return true (both 2 & 3 are valid for this predicate), and allMatch should return false (1 is not valid for this predicate)

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!

const anyMatch = (head, callback) => {
    // your code here...
    while (head) {
        if (callback(head.data)) return true;
        head = head.next;
    }
    return false;
}
const allMatch = (head, callback) => {
    // your code here...
    while (head) {
        if (!callback(head.data)) return false;
        head = head.next;
    }
    return true;
}

module.exports = {
    anyMatch, allMatch
};
