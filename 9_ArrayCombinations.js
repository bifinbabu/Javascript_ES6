// 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

const powerset = (arr) => {
  return arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]]);
};

// Test cases
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));
