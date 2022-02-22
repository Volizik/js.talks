// Implement the method filter, which accepts a linked list and a predicate function, and returns a new linked list which only contains the elements which apply to the given predicate.

// For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }
// Note: the list may be null and can hold any type of value.

// Good luck!

const filter = (list, callback) => {
    // your code here...
    let resultList = null;
    let tail = {};
    while (list) {
        if (callback(list.data)) {
            if (!resultList) {
                resultList = { data: list.data }
                tail = resultList
            } else {
                tail.next = { data: list.data, next: null }
                tail = tail.next;
            }
        }
        list = list.next;
    }
    return resultList;
}

module.exports = filter;
