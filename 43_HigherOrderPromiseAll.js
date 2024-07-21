// 43. Write a JavaScript program to change a function that accepts an array into a variadic function.

const collectInto =
  (fn) =>
  (...args) =>
    fn(args);

const Pall = collectInto(Promise.all.bind(Promise));

// Create three promises 'p1', 'p2', and 'p3'.
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise((resolve) => setTimeout(resolve, 2000, 3));

// Call 'Pall' with the promises 'p1', 'p2', and 'p3' and log the result.
Pall(p1, p2, p3).then(console.log); // Output: [1, 2, 3] (after about 2 seconds)
