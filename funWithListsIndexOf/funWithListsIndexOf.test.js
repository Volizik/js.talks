const LinkedList = require('../LinkedList');
const funWithListsIndexOf1 = require('./funWithListsIndexOf1');
const funWithListsIndexOf2 = require('./funWithListsIndexOf2');
const funWithListsIndexOf3 = require('./funWithListsIndexOf3');

const linkedList = new LinkedList();
linkedList
    .insert('test')
    .insert(123)
    .insert(321)
    .insert('testtest');

describe('funWithListsIndexOf', () => {
    test('Should return 0', () => {
        expect(funWithListsIndexOf1(linkedList.get(), 'test')).toEqual(0);
        expect(funWithListsIndexOf2(linkedList.get(), 'test')).toEqual(0);
        expect(funWithListsIndexOf3(linkedList.get(), 'test')).toEqual(0);
    })
    test('Should return 1', () => {
        expect(funWithListsIndexOf1(linkedList.get(), 123)).toEqual(1);
        expect(funWithListsIndexOf2(linkedList.get(), 123)).toEqual(1);
        expect(funWithListsIndexOf3(linkedList.get(), 123)).toEqual(1);
    })
    test('Should return -1', () => {
        expect(funWithListsIndexOf1(linkedList.get(), '123')).toEqual(-1);
        expect(funWithListsIndexOf2(linkedList.get(), '123')).toEqual(-1);
        expect(funWithListsIndexOf3(linkedList.get(), '123')).toEqual(-1);
    })
});
