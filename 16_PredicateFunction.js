// 16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

const all = (arr, fn = Boolean) => arr.every(fn);

// Example usage
console.log(all([4, 2, 3], (x) => x > 1)); // Returns true since all elements are greater than 1
console.log(all([4, 2, 3], (x) => x < 1)); // Returns false since not all elements are less than 1
console.log(all([1, 2, 3])); // Returns true since all elements are truthy
console.log(all([0, 2, 3])); // Returns false since zero is false
