// 14. Write a JavaScript program to replace multiple object keys' names with the values provided.

const rename_keys = (change, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      //   ...{ [change[key] ?? key]: obj[key] }, // Rename keys based on the keysMap, otherwise keep the original key - Both methods will give the desired output
      ...{ [change[key] || key]: obj[key] }, // Rename keys based on the keysMap, otherwise keep the original key - Both methods will give the desired output
      //   In JavaScript, the || operator (logical OR) is used to return the first "truthy" value.
    }),
    {}
  );
};

// Iterating Over obj
// Iteration 1:

// key = "name"
// change["name"] = "firstName" (truthy)
// Result: ["firstName"]: obj["name"] (which is ["firstName"]: "Bobo")

// Iteration 2:

// key = "job"
// change["job"] = "Actor" (truthy)
// Result: ["Actor"]: obj["job"] (which is ["Actor"]: "Programmer")
// Iteration 3:

// key = "shoeSize"
// change["shoeSize"] is undefined (falsy)
// Result: ["shoeSize"]: obj["shoeSize"] (which is ["shoeSize"]: 100)

// Original object
const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");

// Renaming keys according to the provided mapping
result = rename_keys({ name: "firstName", job: "Actor" }, obj);

// Displaying the modified object
console.log("New Object");
console.log(result);
