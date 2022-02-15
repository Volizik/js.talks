const LinkedList = require('../LinkedList');
const funWithListsLength1 = require('./funWithListsLength1');

const linkedList = new LinkedList();

linkedList
    .insert('test')
    .insert(123)
    .insert(321)
    .insert('testtest');

const params = linkedList.get();
const result = 4;

describe('funWithListsLength', () => {
    test('Testing returned value 1', () => {
        expect(funWithListsLength1(params)).toEqual(result);
    })
});
