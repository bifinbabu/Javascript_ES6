// 22. Write a JavaScript program to filter out non-unique values in an array.

const filter_Non_Unique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

// Example usage
console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));
console.log(filter_Non_Unique([1, 2, 3, 4]));
