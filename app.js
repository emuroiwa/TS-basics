"use strict";
// Explict type casting
//String Types 
var myName = "Ernest";
//number type
var myAge = 33;
//boolean type
var myBool = true;
//Arrays
//tuples
var myTuple = [12, 'fe'];
//enum
var Color;
(function (Color) {
    Color[Color["Black"] = 1] = "Black";
    Color[Color["White"] = 3] = "White";
    Color[Color["Orange"] = 2] = "Orange";
})(Color || (Color = {}));
var myColor = Color.Black;
console.log(myColor);
//Type any
var Car = 'haya';
console.log(Car);
Car = 3;
//type alias
