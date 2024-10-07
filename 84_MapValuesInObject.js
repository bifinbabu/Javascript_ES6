// 84. Write a JavaScript program to create an object with the same keys as the provided object. It will also generate values generated by running the provided function for each value.

const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, val) => ((acc[val] = fn(obj[val])), acc), {});

// Example usage:
const users = {
  fred: { user: "fred", age: 40 },
  pebbles: { user: "pebbles", age: 1 },
};
console.log(mapValues(users, (u) => u.age)); // Outputs: { fred: 40, pebbles: 1 }