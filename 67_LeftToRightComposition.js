// 67. Write a JavaScript program to perform left-to-right function composition.

// Define a function 'composeRight' that takes any number of functions as arguments and returns a new function.
const composeRight = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );

// Define functions 'add' and 'square'.
const add = (x, y) => x + y;
const square = (x) => x * x;

// Create a new function 'addAndSquare' by composing 'add' and 'square' in the right-to-left order.
const addAndSquare = composeRight(add, square);

// Example usage:
console.log(addAndSquare(1, 2)); // Output 9
console.log(addAndSquare(3, 2)); // Output 25
