// 82. Write a JavaScript program to map array values to an object using a function. The key-value pairs consist of the original value as the key and the mapped value.

const mapObject = (arr, fn) =>
  arr.reduce((acc, val) => {
    acc[val] = fn(val);
    return acc;
  }, {});

// Define a function 'squareIt' that squares each element of an array and returns the result as an object.
const squareIt = (arr) => mapObject(arr, (a) => a * a);

// Example usage:
console.log(squareIt([1, 2, 3])); // Outputs: { '1': 1, '2': 4, '3': 9 }
