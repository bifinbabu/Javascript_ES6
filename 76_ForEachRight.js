// 76. Write a JavaScript program to execute a provided function once for each array element, starting with the array's last element.

const forEachRight = (arr, fn) => arr.reverse().map(fn);

forEachRight([1, 2, 3, 4], (val) => console.log(val)); // Outputs: 4, 3, 2, 1

const forEachRight1 = (arr, callback) =>
  arr
    .slice(0) // Create a shallow copy of the array to avoid mutating the original array.
    .reverse() // Reverse the order of elements in the copied array.
    .forEach(callback); // Apply the callback function to each element.
// Example usage:
forEachRight1([1, 2, 3, 4], (val) => console.log(val)); // Outputs: 4, 3, 2, 1
