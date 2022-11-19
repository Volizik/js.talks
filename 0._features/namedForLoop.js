// Today we will talk about how to optimize your javascript loops
// For example we have task where we need to find coincidence in two arrays.
// For simplify example it will be small arrays, and has only one coincidence.

const arr1 = ['1', '2', '3', '4'];
const arr2 = ['8', '2', '5', '9'];
let count = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            // do something
        }
        count++;
    }
}
console.log(`There were ${count} occurrences`); // There were 16 occurrences


count = 0;
// If we add break statement, we optimize a little
// but only a little, because we break only nested loop
// first loop continue working, despite we don't need it
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            // do something
            break;
        }
        count++;
    }
}
console.log(`There were ${count} occurrences`); // There were 13 occurrences

count = 0;
// In javascript you could add labels for loops
// and then break or continue any loop you are inside
loop1: for (let i = 0; i < arr1.length; i++) {
    loop2: for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            // do something
            break loop1;
        }
        count++;
    }
}
console.log(`There were ${count} occurrences`); // There were 5 occurrences
