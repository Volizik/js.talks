const funWithListsFilter1 = require('./funWithListsFilter1');
const funWithListsFilter2 = require('./funWithListsFilter2');
const funWithListsFilter3 = require('./funWithListsFilter3');
const LinkedList = require('../LinkedList');

const list = new LinkedList().insert(1).insert(2).insert(3).head;
const filteredList = new LinkedList().insert(2).insert(3).head;
const convertToArray = (head) => {
    return head ? [head.data, ...convertToArray(head.next)] : [];
}

describe('funWithListsFilter', () => {
    test('Some items was filtered', () => {
        expect(funWithListsFilter1(list, (num) => num >= 2).length).toEqual(filteredList.length);
        expect(funWithListsFilter2(list, (num) => num >= 2).length).toEqual(filteredList.length);
        expect(funWithListsFilter3(list, (num) => num >= 2).length).toEqual(filteredList.length);
    })
    test('Nothing apply to the given predicate', () => {
        expect(funWithListsFilter1(list, (num) => num >= 12)).toEqual(null);
        expect(funWithListsFilter2(list, (num) => num >= 12)).toEqual(null);
        expect(funWithListsFilter3(list, (num) => num >= 12)).toEqual(null);
    })
    test('All apply to the given predicate', () => {
        expect(convertToArray(funWithListsFilter1(list, (num) => num >= 0)).length).toEqual(3);
        expect(convertToArray(funWithListsFilter2(list, (num) => num >= 0)).length).toEqual(3);
        expect(convertToArray(funWithListsFilter3(list, (num) => num >= 0)).length).toEqual(3);
    })
    test('List is empty', () => {
        expect(funWithListsFilter1(null, (num) => num >= 0)).toStrictEqual(null);
        expect(funWithListsFilter2(null, (num) => num >= 0)).toStrictEqual(null);
        expect(funWithListsFilter3(null, (num) => num >= 0)).toStrictEqual(null);
    })
});
