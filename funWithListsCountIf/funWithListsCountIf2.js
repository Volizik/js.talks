
const countIf = (head, callback) => {
    // your code here...
    const convertToArray = (head) => head ? [head.data, ...convertToArray(head.next)] : [];

    return convertToArray(head).filter(callback).length;
}

module.exports = countIf;
