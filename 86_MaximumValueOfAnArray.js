// 86. Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.

const maxBy = (arr, fn) =>
  Math.max(...arr.map(typeof fn === "function" ? fn : (val) => val[fn])); // Here we are using the spread operator because the Math.max does not accept the array directly. It needs a series of numbers

console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n)); // Outputs: 8 (maximum value of 'n')
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n")); // Outputs: 8 (maximum value of 'n')
