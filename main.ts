export { }
// tsc main.ts --watch --> watches file changes and compiles with each change
// tsc main.ts --> compiles into js file when run


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

// Unions -- able to pass multiple types of a variable
let union: number | null | undefined = 3;
console.log(`Union: ${union}`)
union = null
console.log(`Union: ${union}`)

// Array declaration
let list: number[] = [1, 2, 3]
let list2: Array<number> = [3, 2, 1]

// Tuple - express an array with a fixed number of elements with known types, but does not need to be the same type.
let x: [string, number];
x = ['hello', 10]

// Enum - "more friendly names to sets of numeric values".  Makes a new datatype that is 0-indexed
enum Color { Red, Green, Blue }
let c: Color = Color.Green
console.log(Color)
console.log(c)
// access the value based on the index
console.log(Color[1])
// can also override the index
enum Colors { Red = 1, Green = 2, Blue = 4 }
console.log(Colors[1])

// Any Type -- can create a variable that can change types
let notSure: any = 4;
notSure = "I can be a string"
notSure = false // change it to a boolean
let anyList: any[] = [195, true, "string"]
console.log(anyList[1])

// Void type -- absence of having any type.  Usually see this as the return type of functions that do not have a return value
function warnUser(): void {
  console.log('warning warning warning')
}

// Never type -- typically used as the returnt ype of a function expression that always throws an exception or never returns
function infiniteLoop(): number {
  while (true) {
  }
}

function error(message: string): never {
  throw new Error(message);
}

// Object - a type that represents the non-primitive type ... anything not a number, string, boolean, symbol, null, or undefined.
declare function create(o: object | null): void;
create({ property: 0 }) // OK
create(null) // OK
// create(42) // Error
// create('string') // Error

// Type Assertions -- a way to override the compiler checks
// "angle bracket syntax"
let someVal: any = 'this is a string'
let strLen: number = (<string>someVal).length
// the "as syntax"
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length