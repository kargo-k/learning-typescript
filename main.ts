export { }

// Typescript types: boolean, number, string
let name: string = 'Karen'
let num: number = 3.14
let flag: boolean = false
let greeting: string = `Hello, my name is ${name}! Pi is ${num}`

console.log(greeting, flag)

// Subtypes: null and undefined
let num2: number = undefined;
console.log('num2 should be undefined: ', num2)
num2 = 4;
console.log('redefining num2 to a number: ', num2)

let flag2: boolean = null;
flag2 = true;

// Example of a Tuple
