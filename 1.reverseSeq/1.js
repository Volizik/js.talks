// Reversed sequence

// RU
// Напишите функцию, которая получает целое число n, и возвращает массив целых чисел от n до 1, где n > 0
// Например: n=5 --> [5,4,3,2,1]

// EN
// Build a function that returns an array of integers from n to 1 where n > 0
// Example: n=5 --> [5,4,3,2,1]

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    const result = [];

    for (let i = n; i >= 1; i--) {
        result.push(i);
    }

    return result;
};

module.exports = reverseSeq;
