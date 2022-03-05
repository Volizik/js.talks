const unluckyDays = (year) => {
    if (typeof year !== "number" || year < 0) return null;

    const fridayIndex = 5;
    const unluckyDay = 13;

    return Array
        .from({ length: 12 })
        .filter((_, month) => new Date(year, month, unluckyDay).getDay() === fridayIndex)
        .length
}

module.exports = unluckyDays;
