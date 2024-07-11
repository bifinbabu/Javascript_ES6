// 25. Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.

const xProd = (a1, a2) => {
  let prodArr = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      prodArr.push([a1[i], a2[j]]);
    }
  }
  return prodArr;
};

// Best method
const xProdB = (a, b) =>
  a.reduce((acc, x) => acc.concat(b.map((y) => [x, y])), []);

// Example usage
console.log(xProd([1, 2], ["a", "b"])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(xProd([1, 2], [1, 2])); // [[1, 1], [1, 2], [2, 1], [2, 2]]
console.log(xProd(["a", "b"], ["a", "b"])); // [['a', 'a'], ['a', 'b'], ['b', 'a'], ['b', 'b']]
console.log("-----------------------------------");
console.log(xProdB([1, 2], ["a", "b"])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(xProdB([1, 2], [1, 2])); // [[1, 1], [1, 2], [2, 1], [2, 2]]
console.log(xProdB(["a", "b"], ["a", "b"])); // [['a', 'a'], ['a', 'b'], ['b', 'a'], ['b', 'b']]
