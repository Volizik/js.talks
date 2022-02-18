
const convertToArray = (head) => head ? [head.data, ...convertToArray(head.next)] : [];

const countIf = (head, callback) => {
    return convertToArray(head).filter(callback).length;
}

module.exports = countIf;
