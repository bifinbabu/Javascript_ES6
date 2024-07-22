// 52. Write a JavaScript program to group the elements of a given array based on the given function.

const group_By = (arr, fn) =>
  // Map the array elements to keys using the provided function, then reduce into groups based on keys.
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]); // Create groups based on keys.
      return acc;
    }, {});

// Test cases
console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); // Output: { '2.463751439371663': [ 6.1, 6.3 ], '2.04939015319192': [ 4.2 ] }
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); // Output: { '6': [ 6.1, 6.3 ], '4': [ 4.2 ] }
console.log(group_By(["one", "two", "three"], "length")); // Output: { '3': [ 'one', 'two' ], '5': [ 'three' ] }
