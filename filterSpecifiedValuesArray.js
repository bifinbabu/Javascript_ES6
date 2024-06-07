// 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

const pull = (arr, ...args) => {
  let ar = arr;
  for (let i = 0; i < args.length; i++) {
    ar = ar.filter((item) => item !== args[i]);
  }
  return ar;
};

// Test cases
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c")); // Output: ['b', 'b']
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra2, "b")); // Output: ['a', 'c', 'a', 'c']
