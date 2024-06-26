// 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

const bifurcate = (arr, cArr) => {
  let fArr = [];
  let sArr = [];
  for (let i = 0; i < cArr.length; i++) {
    if (cArr[i] === true) {
      fArr.push(arr[i]);
    } else {
      sArr.push(arr[i]);
    }
  }
  return [fArr, sArr];
};

// Best method
const bifurcateBest = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
    [[], []]
  );

// Accumulation Logic:

// (acc[filter[i] ? 0 : 1].push(val), acc)
// The condition filter[i] ? 0 : 1 checks the boolean value at index i in the filter array.
// If filter[i] is true, val is pushed into acc[0].
// If filter[i] is false, val is pushed into acc[1].
// The comma operator ( , ) is used to return acc after pushing val into the appropriate subarray.

// Example usage
console.log(bifurcate([1, 2, 3, 4], [true, true, false, true])); // [[1, 2, 4], [3]]
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true])); // [[1, 2, 3, 4], []]
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false])); // [[], [1, 2, 3, 4]]
console.log(bifurcateBest([1, 2, 3, 4], [true, true, false, true])); // [[1, 2, 4], [3]]
console.log(bifurcateBest([1, 2, 3, 4], [true, true, true, true])); // [[1, 2, 3, 4], []]
console.log(bifurcateBest([1, 2, 3, 4], [false, false, false, false])); // [[], [1, 2, 3, 4]]
