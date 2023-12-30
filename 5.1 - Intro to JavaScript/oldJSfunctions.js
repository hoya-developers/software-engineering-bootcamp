// Function to calculate the sum of two numbers
function add(a, b) {
  return a + b;
}

// Function to check if a number is even
function isEven(num) {
  //Note the use of === instead of ==
  return num % 2 === 0;
}

//Note the use of == instead of ===
function badEquality(num1, num2) {
  return num1 == num2;
}

// Function to find the maximum number in an array
function findMax(arr) {
  var max = arr[0];

  //Note .length instead of .size()
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to convert a string to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(add(1, 2)); //adding numbers
console.log(add("Hello ", "World")); //adding strings

console.log(isEven(2));
console.log(isEven("Hello World"));

console.log(badEquality("2", 2)); //type coercion performed by ==

console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMax(["a", "b", "c", "d", "e"]));

console.log(toUpperCase("Hello World"));
// console.log(toUpperCase(1)); //javascript is not a strongly typed language
