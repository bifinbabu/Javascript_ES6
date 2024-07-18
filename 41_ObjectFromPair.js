// 41. Write a JavaScript program to create an object from the given key-value pairs.

const object_From_Pairs = (arr) =>
  arr.reduce((acc, val) => ((acc[val[0]] = val[1]), acc), {});

// Test the 'object_From_Pairs' function with different arrays of key-value pairs and output the resulting objects.
console.log(
  object_From_Pairs([
    ["a", 1],
    ["b", 2],
  ])
); // Output: { a: 1, b: 2 }
console.log(
  object_From_Pairs([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
); // Output: { '1': 10, '2': 20, '3': 30 }
