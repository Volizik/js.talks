// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.

// Examples:
// unluckyDays(2015) === 3
// unluckyDays(1986) === 1

const unluckyDays = (year) => {
    // your code here...
    if (typeof year !== "number" || year < 0) return null;

    const fridayIndex = 5;
    const unluckyDay = 13;
    let blackFridayAmount = 0;

    for (let month = 0; month < 12; month++) {
        if (new Date(year, month, unluckyDay).getDay() === fridayIndex) {
            blackFridayAmount++;
        }
    }

    return blackFridayAmount
}

module.exports = unluckyDays;
