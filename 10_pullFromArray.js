// 10. Write a JavaScript program to extract values at specified indexes from a specified array.

const pull_at_Index = (arr, indexes) => {
  let resultArr = [];
  for (let i = 0; i < indexes.length; i++) {
    resultArr.push(arr[indexes[i]]);
  }
  return resultArr;
};

// Test cases
let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(pull_at_Index(arra1, [1, 3])); // Output: ['b', 'd']
let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4])); // Output: [5]
