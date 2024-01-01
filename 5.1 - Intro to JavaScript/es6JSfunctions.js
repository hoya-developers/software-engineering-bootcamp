const add = (a, b) => {
  return a + b;
};

const isEven = (num) => num % 2 === 0;

//uses tertiary operator
const isOne = (num) =>
  num === 1 ? console.log("is one") : console.log("is not one");

//example of var scope
const varScoping = () => {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
};

//example of let scope
const letScoping = () => {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
};

console.log(add(1, 2)); //adding numbers
console.log(add("Hello ", "World")); //adding strings

console.log(isEven(2));
console.log(isEven("Hello World"));

console.log("print varScoping");
varScoping();

console.log("print letScoping");
letScoping();
