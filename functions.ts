//explict return types

// the return type must be a string
function getName(): string{
    let a = "Ernest";
    return a;
}
console.log(getName());

//void funtion
function sayHi() : void {
    console.log('hi')
}
console.log(sayHi());

//argument types
function mulitple(num1 : number, num2 : number)  : number {
    return num1 * num2
}

//function types
let myTimes: (val1: number, val2: number) => number;
myTimes = mulitple;
console.log(myTimes(20,30))
