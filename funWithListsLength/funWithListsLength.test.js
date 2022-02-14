const funWithListsLength1 = require('./funWithListsLength1');

const params = '';
const result = '';

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

const LinkedList = () => {
    this.data = null;
    this.next = null

    this.insert = (node) => {
        if (!this.data) {
            this.data = node.data;
        } else {
            this.next =
        }
    }
}

describe('funWithListsLength', () => {
    test('Testing returned value 1', () => {
        expect(funWithListsLength1(params)).toEqual(result);
    })
});
