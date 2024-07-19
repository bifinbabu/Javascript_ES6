// 42. Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.

const customCoalesce = (...args) =>
  args.map((i) => (i ? i : false)).find((item) => item !== false);

console.log(customCoalesce(undefined, null, NaN, "", "Waldo")); // Output: 'Waldo'
