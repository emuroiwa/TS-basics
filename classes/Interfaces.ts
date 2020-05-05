//Pascal case naming convention when dealing with  interfaces
interface Point {
  x: number;
  y: number;
}

///inline annotation the verbose way
let drawPointVerbose = (point: { x: number; y: number }) => {};
///inline annotation the cleaner way
let drawPointClean = (point: Point) => {};
drawPointClean({
  x: 1,
  y: 9,
});
