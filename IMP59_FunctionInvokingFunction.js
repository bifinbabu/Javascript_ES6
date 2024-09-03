// 59. Write a JavaScript program to create a function that invokes fn in a given context. Optionally add any additional variables to the arguments beginning.

// Define a function 'bind' to bind a context and arguments to a function.
const bind = (fn, context, ...args) =>
  // Return a new function that applies the original function with the provided context and arguments.
  function () {
    return fn.apply(context, args.concat(...arguments));
  };

// Define a function 'greet' to concatenate a greeting with a user and punctuation.
function greet(greeting, punctuation) {
  return greeting + " " + this.user + punctuation;
}

// Define an object 'freddy' with a 'user' property.
const freddy = { user: "Morning" };

// Bind the 'greet' function to the 'freddy' object.
const freddyBound = bind(greet, freddy);

// Call the bound function with additional arguments.
console.log(freddyBound("Good", "!")); // Output: "Good Morning!"
