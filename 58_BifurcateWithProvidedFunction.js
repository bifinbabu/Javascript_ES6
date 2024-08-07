// 58. Write a JavaScript program to split values into two groups according to a predicate function. This specifies which group an element in the input collection belongs to.

const bifurcateBy = (arr, fn) =>
  arr.reduce(
    (acc, val) => (fn(val) ? acc[0].push(val) : acc[1].push(val), acc),
    [[], []]
  );

// Best approach
const bifurcateBy1 = (arr, fn) =>
  // Reduce the array into two groups based on the truthiness of the function's result.
  arr.reduce((acc, val, i) => (acc[fn(val) ? 0 : 1].push(val), acc), [[], []]);

// Test case
console.log(bifurcateBy(["beep", "boop", "foo", "bar"], (x) => x[0] === "b"));
console.log(bifurcateBy1(["beep", "boop", "foo", "bar"], (x) => x[0] === "b"));
// Output: [['beep', 'boop', 'bar'], ['foo']] (words starting with 'b' in the first group, others in the second group)
