// 2. Write a function in Javascript, which receives NUMBER and has the next logic:
// a) it prints "foo" if NUMBER is divisible by 2;
// b) it prints "bar" if NUMBER is divisible by 7;
// c) it prints "foobar" if NUMBER is divisible by 14;
// d) it prints NUMBER value for other cases;
// note: NUMBER is a positive integer number;

function printText(arg) {
  let output = "";
  if (arg % 14 === 0) {
    output = "foobar";
    return output;
  }
  if (arg % 2 === 0) {
    output = "foo";
    return output;
  }
  if (arg % 7 === 0) {
    output = "bar";
    return output;
  }
  output = arg;
  return output;
}

console.log(printText(140));
