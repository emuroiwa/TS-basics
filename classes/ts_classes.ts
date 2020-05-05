//classes encourage COHESION that is group similar routines together
class Person {
  x: number;
  y: number;

  // the question mark makes the arguments optional
  // if an arguements are made optional all the other arguments to the right should be optional as well
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  test() {
    console.log(`X wedu ${this.x} 
      na Y wedu ${this.y}`);
  }
}

var aPerson: Person = new Person(6, 8);
aPerson.test();
