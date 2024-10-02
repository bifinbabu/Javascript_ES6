// 78. Write a JavaScript program to invert the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.

const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});

console.log(invertKeyValues({ a: 1, b: 2, c: 1 })); // Outputs: { '1': ['a', 'c'], '2': ['b'] }
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, (value) => "group" + value)); // Outputs: { group1: ['a', 'c'], group2: ['b'] }
