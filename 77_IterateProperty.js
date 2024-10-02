// 77. Write a JavaScript program to iterate over all the properties of an object, running a callback for each one.

const forOwn = (obj, fn) => Object.keys(obj).forEach((key) => fn(obj[key]));

// Example usage:
forOwn({ foo: "bar", a: 1 }, (v) => console.log(v)); // Outputs: 'bar', 1
