// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

const towerBuilder = (floors) => {
    // your code here...
    if (!floors || typeof floors !== 'number' || floors <= 0) return [];

    return Array.from(Array(floors), (_, idx) => {
        const spaces = Array(floors - idx - 1).fill(' ').join('');
        const stars = Array(idx * 2 + 1).fill('*').join('');

        return `${spaces}${stars}${spaces}`;
    });
}

module.exports = towerBuilder;
