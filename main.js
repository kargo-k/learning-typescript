"use strict";
exports.__esModule = true;
// tsc main.ts --watch --> watches file changes and compiles with each change
// tsc main.ts --> compiles into js file when run
// Typescript types: boolean, number, string
var name = 'Karen';
var num = 3.14;
var flag = false;
var greeting = "Hello, my name is " + name + "! Pi is " + num;
console.log(greeting, flag);
// Subtypes: null and undefined
var num2 = undefined;
console.log('num2 should be undefined: ', num2);
num2 = 4;
console.log('redefining num2 to a number: ', num2);
var flag2 = null;
flag2 = true;
// Unions -- able to pass multiple types of a variable
var union = 3;
console.log("Union: " + union);
union = null;
console.log("Union: " + union);
// Array declaration
var list = [1, 2, 3];
var list2 = [3, 2, 1];
// Tuple - express an array with a fixed number of elements with known types, but does not need to be the same type.
var x;
x = ['hello', 10];
// Enum - "more friendly names to sets of numeric values".  Makes a new datatype that is 0-indexed
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(Color);
console.log(c);
// access the value based on the index
console.log(Color[1]);
// can also override the index
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 4] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors[1]);
// Any Type -- can create a variable that can change types
var notSure = 4;
notSure = "I can be a string";
notSure = false; // change it to a boolean
var anyList = [195, true, "string"];
console.log(anyList[1]);
// Void type -- absence of having any type.  Usually see this as the return type of functions that do not have a return value
function warnUser() {
    console.log('warning warning warning');
}
// Never type -- typically used as the returnt ype of a function expression that always throws an exception or never returns
function infiniteLoop() {
    while (true) {
    }
}
function error(message) {
    throw new Error(message);
}
create({ property: 0 }); // OK
create(null); // OK
// create(42) // Error
// create('string') // Error
// Type Assertions -- a way to override the compiler checks
// "angle bracket syntax"
var someVal = 'this is a string';
var strLen = someVal.length;
// the "as syntax"
var someValue = 'this is a string';
var strLength = someValue.length;
