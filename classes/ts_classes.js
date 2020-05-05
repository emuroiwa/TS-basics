//classes encourage COHESION that is group similar routines together
var Person = /** @class */ (function () {
    // the question mark makes the arguments optional
    function Person(x, y) {
        this.x = x;
        this.y = y;
    }
    Person.prototype.test = function () {
        console.log("X wedu " + this.x + " \n      na Y wedu " + this.y);
    };
    return Person;
}());
var aPerson = new Person(6, 8);
aPerson.test();
