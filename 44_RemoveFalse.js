// 44. Write a JavaScript program to remove false values from a given array.

const compact = (arr) =>
  arr.filter((i) => ![false, undefined, NaN, 0, ""].includes(i));

// Test the 'compact' function with two arrays and log the results.
console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34])); // Output: [1, 2, 3, 'a', 's', 34]
console.log(compact([false, NaN, "e" * 23])); // Output: []

// Best method
const compactBest = (arr) => arr.filter(Boolean);

console.log(compactBest([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34])); // Output: [1, 2, 3, 'a', 's', 34]
console.log(compactBest([false, NaN, "e" * 23])); // Output: []
