const createPhoneNumber = (arr) => {
    if (arr.length !== 10) throw Error('Array must have 10 numbers');

    let number = '(xxx) xxx-xxxx';
    arr.forEach((n) => number = number.replace('x', n));
    return number;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
