// 85. Write a JavaScript program to replace all but the last number of characters with the specified mask character.

const mask = (str, len = 2, replacer = "*") =>
  (str + "").split("").slice(len).join("");

// Example usage:
console.log(mask(1234567890));
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, "$"));
