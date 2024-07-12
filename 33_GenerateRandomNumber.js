// 33. Write a JavaScript program to generate a random number in the specified range.

const random_Number_In_Range = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// Test the function with different range values and output the results.
console.log(random_Number_In_Range(100000, 999999)); // Output: Random number between 2 and 10
console.log(random_Number_In_Range(2, 10)); // Output: Random number between 2 and 10
console.log(random_Number_In_Range(1, 5)); // Output: Random number between 1 and 5
console.log(random_Number_In_Range(-5, -2)); // Output: Random number between -5 and -2
console.log(random_Number_In_Range(0, 1)); // Output: Random number between 0 and 1
