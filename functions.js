"use strict";
//explict return types
// the return type must be a string
function getName() {
    var a = "Ernest";
    return a;
}
console.log(getName());
//void funtion
function sayHi() {
    console.log('hi');
}
console.log(sayHi());
//argument types
function mulitple(num1, num2) {
    return num1 * num2;
}
//function types
var myTimes;
myTimes = mulitple;
console.log(myTimes(20, 30));
