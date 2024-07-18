// 40. Write a JavaScript program to create an array of key-value pair arrays from a given object.

const object_to_pairs = (obj) =>
  Object.keys(obj).reduce((acc, val) => (acc.push([val, obj[val]]), acc), []);

// Best method
const object_to_pair = (obj) => Object.keys(obj).map((k) => [k, obj[k]]);

// Test the 'object_to_pairs' function with different objects and output the resulting arrays of key-value pairs.
console.log(object_to_pairs({ a: 1, b: 2 })); // Output: [['a', 1], ['b', 2]]
console.log(object_to_pairs({ a: 1, b: 2, c: 3 })); // Output: [['a', 1], ['b', 2], ['c', 3]]
console.log(object_to_pair({ a: 1, b: 2 })); // Output: [['a', 1], ['b', 2]]
console.log(object_to_pair({ a: 1, b: 2, c: 3 })); // Output: [['a', 1], ['b', 2], ['c', 3]]
