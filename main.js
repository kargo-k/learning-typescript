"use strict";
exports.__esModule = true;
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
console.log(num2);
var flag2 = null;
