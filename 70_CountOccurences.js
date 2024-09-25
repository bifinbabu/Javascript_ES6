// 70. Write a JavaScript program to count a value in an array.

const countOccurrences = (arr, value) =>
  arr.reduce((acc, val) => {
    val === value ? acc++ : acc;
    return acc;
  }, 0);

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1)); // Output: 3
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2)); // Output: 2
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3)); // Output: 1
