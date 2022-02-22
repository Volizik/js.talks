const funWithListsMatch1 = require('./funWithListsMatch1');
const funWithListsMatch2 = require('./funWithListsMatch2');
const funWithListsMatch3 = require('./funWithListsMatch3');
const LinkedList = require("../LinkedList");

const linkedList = new LinkedList();
const list = linkedList.insert(1).insert(2).insert(3).head;

describe('funWithLists allMatch/anyMatch', () => {
    test('all values matched', () => {
        expect(funWithListsMatch1.allMatch(list, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch1.anyMatch(list, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch2.allMatch(list, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch2.anyMatch(list, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch3.allMatch(list, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch3.anyMatch(list, (x) => x > 0)).toEqual(true);
    })
    test('several values matched', () => {
        expect(funWithListsMatch1.allMatch(list, (x) => x >= 2)).toEqual(false);
        expect(funWithListsMatch1.anyMatch(list, (x) => x >= 2)).toEqual(true);
        expect(funWithListsMatch2.allMatch(list, (x) => x >= 2)).toEqual(false);
        expect(funWithListsMatch2.anyMatch(list, (x) => x >= 2)).toEqual(true);
        expect(funWithListsMatch3.allMatch(list, (x) => x >= 2)).toEqual(false);
        expect(funWithListsMatch3.anyMatch(list, (x) => x >= 2)).toEqual(true);
    })
    test('list is null', () => {
        expect(funWithListsMatch1.allMatch(null, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch1.anyMatch(null, (x) => x > 0)).toEqual(false);
        expect(funWithListsMatch2.allMatch(null, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch2.anyMatch(null, (x) => x > 0)).toEqual(false);
        expect(funWithListsMatch3.allMatch(null, (x) => x > 0)).toEqual(true);
        expect(funWithListsMatch3.anyMatch(null, (x) => x > 0)).toEqual(false);
    })
});
