// 36. Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.

// Define a higher-order function named 'over' that takes multiple functions as arguments and returns a new function.
const over =
  (...fns) =>
  (...args) =>
    fns.map((fn) => fn.apply(null, args));

// Create a new function named 'minMax' using the 'over' function to combine 'Math.min' and 'Math.max'.
const minMax = over(Math.min, Math.max);

// Test the 'minMax' function with different sets of numbers and output the results.
console.log(minMax(1, 2, 3, 4, 5)); // Output: [1, 5] (minimum and maximum values)
console.log(minMax(1, 2, 5, 4, 3)); // Output: [1, 5] (minimum and maximum values)
console.log(minMax(1, 2, 5, -4, 3)); // Output: [-4, 5] (minimum and maximum values)
