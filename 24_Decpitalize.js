// 24. Write a JavaScript program to dcapitalize the first letter of a string.

const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));

// Example usage
console.log(decapitalize("W3resource"));
console.log(decapitalize("Red", true));
