// 30. Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.

// const without = (arr, ...rest) => rest.map((i) => arr.filter((n) => n !== i));
const without = (arr, ...rest) => arr.filter((v) => !rest.includes(v));
//   arr.reduce((acc, val) => {
//     rest.map((i) => (acc.includes(i) ? acc.filter((x) => x !== i) : acc));
//   }, arr);

console.log(without([2, 1, 2, 3], 1, 2)); // Output: [3]
console.log(without([2, 1, 2, 3], 3)); // Output: [2, 1, 2]

// const arr = [1, 2, 3, 4];
// let n = arr.filter((n) => n === 3);
// console.log(n);
