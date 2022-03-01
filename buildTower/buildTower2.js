// It will be better to use String.prototype.repeat() method for filling string.

const towerBuilder = (floors) => {
    if (!floors || typeof floors !== 'number' || floors <= 0) return [];

    return Array.from(Array(floors), (_, idx) => {
        const spaces = ' '.repeat(floors - idx - 1);
        const stars = '*'.repeat(idx * 2 + 1)

        return `${spaces}${stars}${spaces}`;
    })
}

module.exports = towerBuilder;
