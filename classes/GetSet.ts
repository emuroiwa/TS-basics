class GetSet {
  constructor(private _x?: number, private y?: number) {}

  showOutput() {
    console.log(`X wedu ${this._x} 
            na Y wedu ${this.y}`);
  }
  //normal way
  //   getX() {
  //     return this.x;
  //   }
  //   setX(value) {
  //     this.x = val;
  //   }

  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
  }
}

let GSObject = new GetSet(1, 2);

//you now access them as properties
GSObject.x = 10;
GSObject.showOutput();
