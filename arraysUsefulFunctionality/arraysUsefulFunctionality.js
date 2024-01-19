Array.range = function(start, count) {
    return [...Array(count)].map((_, idx) => start + idx);
}

Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
}
