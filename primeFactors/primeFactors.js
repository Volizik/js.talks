// Write a function that generates factors for a given number.
// The function takes an integer as parameter and returns a list of integers. That list contains the prime factors in numerical sequence.
// Examples
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]

const primeFactors = (n) => {
    const numbers = [];

    while (n > 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                n /= i;
                numbers.push(i);
                break;
            }
        }
    }

    return numbers;
}

module.exports = primeFactors;
