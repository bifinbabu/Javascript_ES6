// 39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.

const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, val) => ((acc[val] = obj[val]), acc), {});
// Test the 'omit' function with different objects and arrays of keys to omit, then output the resulting objects.
console.log(omit({ a: 1, b: "2", c: 3 }, ["b"])); // Output: { a: 1, c: 3 }
console.log(omit({ a: 1, b: 2, c: 3 }, ["c"])); // Output: { a: 1, b: 2 }
