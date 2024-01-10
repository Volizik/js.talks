// https://www.codewars.com/kata/538835ae443aae6e03000547/javascript

// Create a function add(n) which returns a function that always adds n to any number
//
// var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6

const functionalAdd = (n1) => {
    // your code here...
    return (n2) => n1 + n2;
}

module.exports = functionalAdd;
