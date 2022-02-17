// We could convert our linked list to array using recursion and call array.lastIndexOf() method

const lastIndexOf = (head, value) => {
    const convertToArray = (list) => {
        return list ? [list.data, ...convertToArray(list.next)] : [];
    }

    return convertToArray(head).lastIndexOf(value);
}

// const linkedList = new LinkedList();
// const list = linkedList.insert('test').insert(123).insert('test').head;
//
// lastIndexOf(list, 123) // 1
// lastIndexOf(list, 'test') // 2
// lastIndexOf(list, 'test2') // -1

module.exports = lastIndexOf;
