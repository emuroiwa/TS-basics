var GetSet = /** @class */ (function () {
    function GetSet(_x, y) {
        this._x = _x;
        this.y = y;
    }
    GetSet.prototype.showOutput = function () {
        console.log("X wedu " + this._x + " \n            na Y wedu " + this.y);
    };
    Object.defineProperty(GetSet.prototype, "x", {
        //normal way
        //   getX() {
        //     return this.x;
        //   }
        //   setX(value) {
        //     this.x = val;
        //   }
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return GetSet;
}());
var GSObject = new GetSet(1, 2);
//you now access them as properties
GSObject.x = 10;
GSObject.showOutput();
