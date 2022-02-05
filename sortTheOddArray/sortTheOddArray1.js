// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortTheOddArray = (array) => {
    // your code here...
    const odd = [];
    const arrayWithoutOdd = array.map((num) => {
        if (num % 2 === 0) return num;

        odd.push(num);
        return undefined;
    })

    odd.sort((a, b) => a - b);
    return arrayWithoutOdd.map((num) => num ?? odd.shift())
}

module.exports = sortTheOddArray;
