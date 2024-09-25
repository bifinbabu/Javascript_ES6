// 71. Write a JavaScript program to create a deep clone of an object.

const deepClone = (obj) => {
  // Create a shallow clone of the object using Object.assign
  let clone = Object.assign({}, obj);
  // Iterate over the keys of the clone
  Object.keys(clone).forEach((key) => {
    // If the value of the key is an object, recursively call deepClone
    clone[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  });
  // If the original object is an array, update the length of the clone and convert it to an array
  return Array.isArray(obj)
    ? (clone.length = obj.length) && Array.from(clone)
    : clone;
};

// Example usage:
const a = { foo: "bar", obj: { a: 1, b: 2 } };
const b = deepClone(a);
console.log(b);
