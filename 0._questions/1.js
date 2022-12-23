// Какой вывод будет в консоле?
// num=9; i=10
// ReferenceError
// num=10; i=9
// num=10; i=10
let num;
let i;

for (i = 0; i < 10; i++) {
    num = i + 1;
}

console.log(`num=${num}; i=${i}`);
