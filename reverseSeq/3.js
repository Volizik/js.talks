const reverseSeq = n => {
    return Array.from(Array(n), (_, index) => n - index);
};

module.exports = reverseSeq;
