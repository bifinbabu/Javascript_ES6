// 31. Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.

const tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr);

// Test the function with different input arrays.
console.log(tail([1, 2, 3])); // Output: [2, 3]
console.log(tail([1])); // Output: [1] (unchanged because the array has only one element)
