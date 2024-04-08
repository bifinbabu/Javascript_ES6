// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

const compare = (obj, source) =>
  Object.keys(source).every(
    // every() method tests whether all elements in the array pass the test implemented by the provided function.
    // If we use map() instead of every, the output will be different
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

console.log(
  compare({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  compare({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  compare({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
); // false
