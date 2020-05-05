//type assertions

let msg;
msg = "msg type now is any";
//prefix the variable with the type in angle brackets and parenthis
let endsWithC = (<string>msg).charAt(1);

let alternativeWay = (msg as string).charAt(1);

console.log(alternativeWay);
