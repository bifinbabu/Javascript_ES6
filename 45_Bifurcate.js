// 45. Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

const bifurcate = (a1, a2) =>
  a1.reduce(
    (acc, val, index) => (acc[a2[index] ? 0 : 1].push(val), acc),
    [[], []]
  );

console.log(
  bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true])
); // Output: [['beep', 'boop', 'bar'], ['foo']]
