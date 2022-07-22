const reverseSeq = n => {
    return Array(n)
        .fill(0)
        .map((_, index) => n - index);
};

module.exports = reverseSeq;
