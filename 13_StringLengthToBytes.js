// 13. Write a JavaScript program to convert a given string's length to bytes.

const byte_Size = (str) => new Blob([str]).size;

// Test the function with different strings
console.log(byte_Size("123456"));
console.log(byte_Size("Hello World"));
console.log(byte_Size("Ã¢"));

// The line of code new Blob([str]).size; is a JavaScript expression that creates a new Blob object from the given string str and then retrieves the size of this Blob in bytes. Here's a breakdown of what each part of the code does:

// new Blob([str]):

// The Blob constructor is used to create a new Blob object.
// A Blob (Binary Large Object) represents immutable raw data.
// The constructor takes an array of parts to include in the Blob. In this case, it's an array with a single element: str, which is a string.
// The Blob object will contain the binary data of the provided string.
