// 56. Write a JavaScript program to check whether all elements in a given array are equal or not.

const allEqual = (arr) => arr.every((val) => val === arr[0]);

// Test cases
console.log(allEqual([1, 2, 3, 4, 5, 6])); // Output: false (not all elements are equal)
console.log(allEqual([12, 12, 12, 12])); // Output: true (all elements are equal)
