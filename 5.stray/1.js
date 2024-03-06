// https://www.codewars.com/kata/57f609022f4d534f05000024

// EN
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// Examples:
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// RU
// Дан массив с нечетным количеством целых чисел, в котором все числа одинаковые кроме одного.
// Напишите метод, который принимает такой массив, и возвращает то самое отличающееся число.
// Ожидается, что массив всегда будет валидным (длинна больше или равна 3)

// Например:
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = (numbers) => {
    // your code here...
    // Ваш замечательный код тут...
    return numbers.find((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));
}

// The find() method returns the value of the first element in the provided array
// that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.


module.exports = stray;
