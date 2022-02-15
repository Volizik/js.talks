
const indexOf = (head, value) => {
    if (!head) return -1;
    if (head.data === value) return 0;

    return indexOf(head.next, value) + 1 || -1;
}

// console.log(indexOf({data: 'test0', next: {data: 1, next: {data: 1}}}, 1))

module.exports = indexOf;
