// We could check if object has property with two ways:
// using obj.hasOwnProperty() method or "in" operator.
// This will work even if object field will have falsy value.

const person = {
    name: '',
    age: null,
    temper: undefined,
}

// person.hasOwnProperty() will work similar
console.log('name' in person) // true
console.log('age' in person) // true
console.log('temper' in person) // true
console.log('job' in person) // false

// The key difference is that "in" will return true for inherited properties,
// whereas "hasOwnProperty()" will return false for inherited properties.
console.log('constructor' in person) // true
console.log(person.hasOwnProperty('constructor')) // false
