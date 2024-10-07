// 83. Write a JavaScript program to create an updated string with the results of calling a provided function on every character in the called string.

const mapString = (str, fn) =>
  str
    .split("")
    .map((s) => fn(s))
    .join("");

console.log(mapString("Javascript exercises", (c) => c.toUpperCase())); // Outputs: "JAVASCRIPT EXERCISES"
