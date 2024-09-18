// 66. Write a JavaScript program to perform right-to-left function composition.

// Define a function 'compose' that takes any number of functions as arguments and returns a new function.
const compose = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

// Define functions 'add5' and 'multiply'.
const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;

// Create a new function 'multiplyAndAdd5' by composing 'add5' and 'multiply'.
const multiplyAndAdd5 = compose(add5, multiply);

// Example usage:
console.log(multiplyAndAdd5(5, 2)); // Output 15
