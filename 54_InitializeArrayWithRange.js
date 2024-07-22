// 54. Write a JavaScript program to initialize an array containing numbers in the specified range. Start and end are inclusive of their common point of difference.

const initialize_Array_With_Range = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i) => i * step + start
  );

// Test cases
console.log(initialize_Array_With_Range(5)); // Output: [ 0, 1, 2, 3, 4, 5 ]
console.log(initialize_Array_With_Range(8, 3)); // Output: [ 3, 4, 5, 6, 7, 8 ]
console.log(initialize_Array_With_Range(6, 0, 2)); // Output: [ 0, 2, 4, 6 ]
