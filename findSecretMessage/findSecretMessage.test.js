const findSecretMessage = require('./findSecretMessage');

describe('findSecretMessage', () => {
    test('Testing right params', () => {
        expect(findSecretMessage('This is a test. this test is fun.'))
            .toEqual('this test is');
        expect(findSecretMessage('This is a fun test. this test is fun.'))
            .toEqual('this test is fun');
    })
    test('Testing uppercase', () => {
        expect(findSecretMessage('123 Qwerty,qwerty!! 123'))
            .toEqual('qwerty 123');
    })
    test('Testing wrong params', () => {
        expect(findSecretMessage('')).toEqual('');
        expect(findSecretMessage()).toEqual('');
        expect(findSecretMessage(123)).toEqual('');
    })
});
