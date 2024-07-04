// 21. Write a JavaScript program to get every nth element in a given array.

const every_nth = (arr, n = 1) =>
  arr.reduce((acc, val, i) => {
    if (i % n === 0) {
      acc.push(val);
    }
    return acc;
  }, []);

// Example usage
console.log(every_nth([1, 2, 3, 4, 5, 6], 1)); // [1, 2, 3, 4, 5, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); // [3, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 4)); // [4]
