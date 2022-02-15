// Because two previous tasks was about working with LinkedList, I decided it will be interesting to create own simple linked list in js.
// I will use this linked list in th next tasks because I'm too lazy to write objects like this every time ;) {data: 1, next: {data: 2, next: {data: "test"}}}

// Expected result:

// const linkedList = new LinkedList();
//
// linkedList
//     .insert('test')
//     .insert(3)
//     .insert(100500);
//
// linkedList.head; // {data: 'test', next: {data: 3, next: {data: 100500}}}
// linkedList.length // 3
// linkedList.indexOf('test') // 0
// linkedList.indexOf(100500) // 2
// linkedList.indexOf(100) // -1

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // The .insert() method will add a new node to the end of the LinkedList and increase the length of the list.
    insert(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    // The .indexOf(value) method will return the index of the first node, which will be equal to the value parameter.
    indexOf(value) {
        let head = this.head;
        let depth = 0;

        while (head) {
            if (head.data === value) return depth;

            head = head.next;
            depth++;
        }
        return -1;
    }

}

module.exports = LinkedList;
