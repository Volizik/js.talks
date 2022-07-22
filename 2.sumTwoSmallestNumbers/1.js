// Sum of two lowest positive integers

// EN
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// RU
// Напишите функцию, которая возвращает сумму двух самых маленьких чисел в данном массиве. Массив должен содержать только целые числа, минимальная длинна 4 цифры.
// Например, если передать в функцию вот этот массив [19, 5, 42, 2, 77], в результате должно вернутся 7

// https://www.codewars.com/kata/558fc85d8fd1938afb000014


function sumTwoSmallestNumbers(numbers) {
    return numbers
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((prev, curr) => prev + curr, 0)
}

module.exports = sumTwoSmallestNumbers;
