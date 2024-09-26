// 73. Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both.

const differenceBy = (a, b, fn) => {
  let s = new Set(b.map((v) => fn(v)));
  console.log(s);
  return a.filter((x) => !s.has(fn(x)));
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // Outputs: [1.2]
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], (v) => v.x)); // Outputs: [{ x: 2 }]
