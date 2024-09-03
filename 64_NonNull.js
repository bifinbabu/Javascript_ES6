// 64. Write a JavaScript program to get the first non-null / undefined argument.

const coalesce = (...args) => args.find((_) => ![undefined, null].includes(_));

console.log(coalesce(null, undefined, "s", NaN, "abcd")); // Output the first non-null and non-undefined value. Output will be s
