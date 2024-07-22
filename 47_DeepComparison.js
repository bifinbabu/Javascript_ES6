// 47. Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.

const equals = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2) ? true : false;

console.log(
  equals(
    { a: [2, { e: 3 }], b: [4], c: "foo" },
    { a: [2, { e: 3 }], b: [4], c: "foo" }
  )
); // Output: true
console.log(
  equals(
    { a: [3, { e: 3 }], b: [4], c: "foo" },
    { a: [2, { e: 3 }], b: [4], c: "foo" }
  )
); // Output: true

// Another method
const equalsMethod = (a, b) => {
  // Check if 'a' and 'b' are strictly equal.
  if (a === b) return true;
  // Check if 'a' and 'b' are instances of Date objects and have equal time values.
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  // Check if either 'a' or 'b' is null, undefined, or not an object, and if they are equal.
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  // Check if either 'a' or 'b' is null, undefined, or if their prototypes are not equal.
  if (
    a === null ||
    a === undefined ||
    b === null ||
    b === undefined ||
    a.prototype !== b.prototype
  )
    return false;
  // Get the keys of 'a'.
  let keys = Object.keys(a);
  // Check if the number of keys in 'a' is equal to the number of keys in 'b'.
  if (keys.length !== Object.keys(b).length) return false;
  // Check if every key-value pair in 'a' is equal to the corresponding key-value pair in 'b'.
  return keys.every((k) => equalsMethod(a[k], b[k]));
};

// Test the 'equalsMethod' function with two objects and log the result.
console.log(
  equalsMethod(
    { a: [2, { e: 3 }], b: [4], c: "foo" },
    { a: [2, { e: 3 }], b: [4], c: "foo" }
  )
); // Output: true
