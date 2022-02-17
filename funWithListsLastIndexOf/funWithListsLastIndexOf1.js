// Implement the method lastIndexOf (last_index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!

const lastIndexOf = (head, value) => {
    // your code here...
    let lastIndex = -1;
    let counter = 0;
    while (head) {
        if (head.data === value) {
            lastIndex = counter;
        }
        counter++;
        head = head.next;
    }
    return lastIndex;
}

// const linkedList = new LinkedList();
// const list = linkedList.insert('test').insert(123).insert('test').head;
//
// lastIndexOf(list, 123) // 1
// lastIndexOf(list, 'test') // 2
// lastIndexOf(list, 'test2') // -1

module.exports = lastIndexOf;
