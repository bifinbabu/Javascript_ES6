// 34. Write a JavaScript program to generate a random integer in the specified range.

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Test the function with different range values and output the results.
console.log(randomIntegerInRange(0, 5)); // Output: Random integer between 0 and 5
console.log(randomIntegerInRange(2, 5)); // Output: Random integer between 2 and 5
console.log(randomIntegerInRange(5, -5)); // Output: Random integer between 5 and -5
console.log(randomIntegerInRange(-2, -7)); // Output: Random integer between -2 and -7
