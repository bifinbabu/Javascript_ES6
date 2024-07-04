// 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.

const remove_from_right = (arr, n = -1) => arr.slice(n);

// Example usage
console.log(remove_from_right([1, 2, 3])); // [3]
console.log(remove_from_right([1, 2, 3], -1)); // [3]
console.log(remove_from_right([1, 2, 3], -2)); // [2, 3]
console.log(remove_from_right([1, 2, 3], -4)); // [1, 2, 3]
