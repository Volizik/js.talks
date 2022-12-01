// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.
// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.
// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 5^2 = 3^2 + 4^2

const pythagoreanTriple = (integers) => {
    // your code here...
    if (integers.length !== 3) return;

    const [a, b, c] = [...integers].sort((a, b) => a - b);

    return c ** 2 === (a ** 2) + (b ** 2);
}

module.exports = pythagoreanTriple;
