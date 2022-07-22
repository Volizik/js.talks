// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

// EN
// Your task, is to create NxN multiplication table, of size provided in parameter.
// for example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// RU
// Задача в том, что бы создать таблицу умножения динамического размера
// Например, если нужный размер 3, получим вот такую таблицу:
// 1 2 3
// 2 4 6
// 3 6 9
// Для этого примера, функция должна вернуть [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (size) => {
    // insert code here
    return Array.from(Array(size), (_, rowIdx) => {
        return Array.from(Array(size), (_, colIdx) => (rowIdx + 1) * (colIdx + 1))
    })
}

module.exports = multiplicationTable;
