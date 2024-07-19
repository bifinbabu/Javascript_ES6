// 42. Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.

const customCoalesce = (...args) =>
  args.map((i) => (i ? i : false)).find((item) => item !== false);

console.log(customCoalesce(undefined, null, NaN, "", "Waldo")); // Output: 'Waldo'

// Higher order function method
const coalesceFactory =
  (valid) =>
  // The returned function takes any number of arguments 'args'.
  (...args) =>
    // Find and return the first argument that passes the validity check.
    args.find(valid);

// Define a custom coalesce function 'customCoalesce' using 'coalesceFactory'.
const customCoalesce1 = coalesceFactory(
  (_) => ![null, undefined, "", NaN].includes(_)
);

// Test the 'customCoalesce1' function with various arguments and output the result.
console.log(customCoalesce1(undefined, null, NaN, "", "Waldo")); // Output: 'Waldo'
