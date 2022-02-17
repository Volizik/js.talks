const funWithListsLastIndexOf1 = require('./funWithListsLastIndexOf1');
const funWithListsLastIndexOf2 = require('./funWithListsLastIndexOf2');
const LinkedList = require('../LinkedList');

const linkedList = new LinkedList();

const list = linkedList
    .insert('test')
    .insert(123)
    .insert('test')
    .head;

describe('funWithListsLastIndexOf', () => {
    test('Found last index', () => {
        expect(funWithListsLastIndexOf1(list, 123)).toEqual(1);
        expect(funWithListsLastIndexOf1(list, 'test')).toEqual(2);
        expect(funWithListsLastIndexOf2(list, 123)).toEqual(1);
        expect(funWithListsLastIndexOf2(list, 'test')).toEqual(2);
    });
    test('Not found index', () => {
        expect(funWithListsLastIndexOf1(list, 'testtest')).toEqual(-1);
        expect(funWithListsLastIndexOf2(list, 'testtest')).toEqual(-1);
    });
    test('List is null', () => {
        expect(funWithListsLastIndexOf1(null, 'testtest')).toEqual(-1);
        expect(funWithListsLastIndexOf2(null, 'testtest')).toEqual(-1);
    });
});
