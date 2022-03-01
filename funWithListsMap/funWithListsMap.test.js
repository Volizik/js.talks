const funWithListsMap1 = require('./funWithListsMap1');
const funWithListsMap2 = require('./funWithListsMap2');
const LinkedList = require('../LinkedList');

const list = new LinkedList().insert(1).insert(2).insert(3).head;
const multipliedList = {data: 2, next: {data: 4, next: {data: 6, next: null}}};

describe('funWithListsMap', () => {
    test('Multiplied by 2', () => {
        expect(funWithListsMap1(list, (x) => x * 2)).toStrictEqual(multipliedList);
        expect(funWithListsMap2(list, (x) => x * 2)).toStrictEqual(multipliedList);
    })
    test('List is null', () => {
        expect(funWithListsMap1(null, (x) => x * 2)).toBeNull();
        expect(funWithListsMap2(null, (x) => x * 2)).toBeNull();
    })
});
