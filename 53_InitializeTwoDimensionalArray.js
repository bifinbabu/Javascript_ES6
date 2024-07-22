// 53. Write a JavaScript program to initialize a two-dimensional array of given size and value.

const initialize_2D_Array = (rows, cols, val) =>
  Array.from({ length: rows }).map(() =>
    Array.from({ length: cols }).fill(val)
  );

// Test cases
console.log(initialize_2D_Array(2, 2, 0)); // Output: [ [ 0, 0 ], [ 0, 0 ] ]
console.log(initialize_2D_Array(3, 3, 3)); // Output: [ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
