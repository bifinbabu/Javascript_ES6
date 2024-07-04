// 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.

const remove_from_left = (arr, n = 1) => arr.slice(n);

// Example usage
console.log(remove_from_left([1, 2, 3])); // [2, 3]
console.log(remove_from_left([1, 2, 3], 1)); // [2, 3]
console.log(remove_from_left([1, 2, 3], 2)); // [3]
console.log(remove_from_left([1, 2, 3], 4)); // []
