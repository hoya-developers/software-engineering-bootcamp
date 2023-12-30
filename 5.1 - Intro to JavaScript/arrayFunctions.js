// Example using map
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example using forEach
const names = ["Alice", "Bob", "Charlie"];

//using both the string literal and arrow function syntax, with the forEach function
names.forEach((name) => {
  const stringLiteral = `Hello, ${name}!`;
  console.log(stringLiteral);
});

// Example using filter
const ages = [18, 25, 30, 15, 40];

const adults = ages.filter((age) => age >= 18);
console.log(adults);

//Example using spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];

console.log(arr2);
