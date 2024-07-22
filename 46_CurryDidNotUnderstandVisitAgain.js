// 46. Write a JavaScript program to curry (curries) a function.

//#Source https://bit.ly/2neWfJ2
// Define a function 'curry' that takes a function 'fn', an arity 'arity', and optional arguments 'args'.
const curry = (fn, arity = fn.length, ...args) =>
  // Check if the number of provided arguments is sufficient to invoke the function.
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

// Test the 'curry' function with Math.pow and Math.min functions, and log the results.
console.log(curry(Math.pow)(2)(8)); // Output: 256
console.log(curry(Math.min, 3)(10)(50)(2)); // Output: 2
