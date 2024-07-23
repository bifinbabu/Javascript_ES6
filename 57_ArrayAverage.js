// 57. Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.

const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;

// Test cases
console.log(
  averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], (o) => o.a)
); // Output: 50 (average of 'a' property)
console.log(averageBy([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], "a")); // Output: 5 (average of 'a' property)
