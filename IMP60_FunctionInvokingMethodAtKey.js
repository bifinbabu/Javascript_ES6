// 60. Write a JavaScript program to create a function that invokes the method at a given key of an object. Optionally, add any parameters that are supplied to the beginning of the arguments.

// Define a function 'bindKey' to bind a method of an object to that object.
const bindKey = (context, fn, ...args) =>
  // Return a new function that applies the specified method of the context with the provided arguments.
  function () {
    return context[fn].apply(context, args.concat(...arguments));
  };

// Define an object 'freddy' with a 'user' property and a 'greet' method.
const freddy = {
  user: "fred",
  greet: function (greeting, punctuation) {
    return greeting + " " + this.user + punctuation;
  },
};

// Bind the 'greet' method of the 'freddy' object.
const freddyBound = bindKey(freddy, "greet");

// Call the bound method with additional arguments.
console.log(freddyBound("hi", "!")); // Output: "hi fred!"
