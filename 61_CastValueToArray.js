// 61. Write a JavaScript program to cast the provided value as an array if it's not one.

const castArray = (arg) => (typeof arg === "object" ? arg : [arg]);

// More correct method
const castArray1 = (val) => (Array.isArray(val) ? val : [val]);

console.log(castArray("w3r")); // Output: ['w3r']
console.log(castArray([100])); // Output: [100]
console.log(castArray1("w3r")); // Output: ['w3r']
console.log(castArray1([100])); // Output: [100]
