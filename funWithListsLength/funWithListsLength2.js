// And a shorter but less readable way if you're not good at functional programming is recursion

const length = (head) => {
    return head ? 1 + length(head.next) : 0
}

console.log(length({data: 1, next: { data: 1 }}))

module.exports = length;
