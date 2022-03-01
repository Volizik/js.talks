const funWithListsReduce1 = require('./funWithListsReduce1');
const funWithListsReduce2 = require('./funWithListsReduce2');
const LinkedList = require('../LinkedList');

const numberList = new LinkedList().insert(1).insert(2).insert(3).head;
const stringList = new LinkedList().insert('t').insert('e').insert('s').insert('t').head;

describe('funWithListsReduce', () => {
    test('Sum of data is right', () => {
        expect(funWithListsReduce1(numberList, (acc, curr) => acc + curr, 0)).toEqual(6);
        expect(funWithListsReduce2(numberList, (acc, curr) => acc + curr, 0)).toEqual(6);
    })
    test('List is null', () => {
        expect(funWithListsReduce1(null, (acc, curr) => acc + curr, 0)).toEqual(0);
        expect(funWithListsReduce2(null, (acc, curr) => acc + curr, 0)).toEqual(0);
    })
    test('String concat', () => {
        expect(funWithListsReduce1(stringList, (acc, curr) => acc + curr, '')).toEqual('test');
        expect(funWithListsReduce2(stringList, (acc, curr) => acc + curr, '')).toEqual('test');
    })
});
