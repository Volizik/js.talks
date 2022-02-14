//Implement the method length, which accepts a linked list (head), and returns the length of the list.
//
// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.
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

const length = (head) => {
    // your code here...
    let current = head;
    let counter = 0;

    while (current) {
        counter++;
        current = current.next;
    }

    return counter;
}

console.log(length({data: 1, next: { data: true, next: {data: 'test'} }}))

module.exports = length;
