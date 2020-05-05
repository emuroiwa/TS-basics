//by default members are private
//Property 'y' is protected and only accessible within
// the base class  and its subclasses.

//you can prefix the access modifier to the arguement and it will genete the  body
// so no need for  this:
// this.x = x;
// this.y = y;

class accessModifiers {
  constructor(private x?: number, private y?: number) {}

  test() {
    console.log(`X wedu ${this.x} 
          na Y wedu ${this.y}`);
  }
}

let AMObject = new accessModifiers(1, 2);
AMObject.test();
