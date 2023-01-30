const createPhoneNumber = require('./createPhoneNumber');
const createPhoneNumber1 = require('./createPhoneNumber1');

describe('createPhoneNumber', () => {
    test('Should return (123) 456-7890 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
        expect(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
    })
    test('1. Should return an error with message "Array must have 10 numbers" for [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        try {
            createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])
        } catch (e) {
            expect(e.message).toEqual("Array must have 10 numbers")
        }
    })
    test('2. Should return an error with message "Array must have 10 numbers" for [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        try {
            createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9])
        } catch (e) {
            expect(e.message).toEqual("Array must have 10 numbers")
        }
    })
});
