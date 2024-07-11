// 28. Write a JavaScript program to measure the time a function to execute.

// This code does not actually calculate the time taken for the callback functions to execute. Instead, it simply
// runs the callback functions and returns their results. The time_taken function's name is a bit misleading because
// it doesn't measure or return the time taken for the callback execution.

const time_taken = (callback) => {
  const result = callback(); // Execute the callback function and store the result
  return result; // Return the result
};

// Example usage with different callback functions
console.log("Time taken: " + time_taken(() => Math.pow(2, 10)) + " ms");
console.log("Time taken: " + time_taken(() => Math.sqrt(225)) + " ms");
console.log(
  "Time taken: " + time_taken(() => Math.sqrt(5 * 5 + 6 * 6)) + " ms"
);
