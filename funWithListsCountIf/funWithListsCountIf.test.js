const funWithListsCountIf1 = require('./funWithListsCountIf1');
const funWithListsCountIf2 = require('./funWithListsCountIf2');
const funWithListsCountIf3 = require('./funWithListsCountIf3');
const LinkedList = require('../LinkedList');

const linkedList = new LinkedList();

const list = linkedList
    .insert(1)
    .insert(2)
    .insert(3)
    .head;

describe('funWithListsCountIf', () => {
    test('Found values', () => {
        expect(funWithListsCountIf1(list, (x) => x >= 2)).toEqual(2);
        expect(funWithListsCountIf2(list, (x) => x >= 2)).toEqual(2);
        expect(funWithListsCountIf3(list, (x) => x >= 2)).toEqual(2);
    })
    test('Haven\'t found values', () => {
        expect(funWithListsCountIf1(list, (x) => x >= 20)).toEqual(0);
        expect(funWithListsCountIf2(list, (x) => x >= 20)).toEqual(0);
        expect(funWithListsCountIf3(list, (x) => x >= 20)).toEqual(0);
    })
    test('List is null', () => {
        expect(funWithListsCountIf1(null, (x) => x >= 2)).toEqual(0);
        expect(funWithListsCountIf2(null, (x) => x >= 2)).toEqual(0);
        expect(funWithListsCountIf3(null, (x) => x >= 2)).toEqual(0);
    })
    test('Callback returns not bool', () => {
        expect(funWithListsCountIf1(list, (x) => x + 1)).toEqual(3);
        expect(funWithListsCountIf2(list, (x) => x + 1)).toEqual(3);
        expect(funWithListsCountIf3(list, (x) => x + 1)).toEqual(3);
    })
});
