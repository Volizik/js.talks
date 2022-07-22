const reverseSeq = n => {
    return [...Array(n)].map((_, index) => n - index);
};

module.exports = reverseSeq;
