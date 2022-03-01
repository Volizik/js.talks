const map = (list, callback) => {
    return list ? {data: callback(list.data), next: map(list.next, callback)} : null
}

module.exports = map;
