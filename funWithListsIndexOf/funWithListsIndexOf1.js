// Implement the method indexOf, which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.
//
// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf should return 2.
//
// The linked list is defined as follows:
//
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.
//
// Good luck!

const indexOf = (head, value) => {
    // your code here...
    let result = -1;
    let depth = 0;
    while (head && result === -1) {
        if (head.data === value) {
            result = depth;
            break;
        }
        depth++
        head = head.next;
    }
    return result;
}

// console.log(indexOf({data: 'test0', next: {data: 1, next: {data: 3}}}, 3))

module.exports = indexOf;
