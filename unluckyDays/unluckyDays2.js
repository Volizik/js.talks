const unluckyDays = (year) => {
    if (typeof year !== "number" || year < 0) return null;

    const daysInYear = 12;
    const fridayIndex = 5;
    const unluckyDay = 13;

    return Array
        .from({ length: daysInYear })
        .filter((_, month) => new Date(year, month, unluckyDay).getDay() === fridayIndex)
        .length
}

module.exports = unluckyDays;
