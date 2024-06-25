// 14. Write a JavaScript program to replace multiple object keys' names with the values provided.

const rename_keys = (change, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      //   ...{ [change[key] ?? key]: obj[key] }, // Rename keys based on the keysMap, otherwise keep the original key - Both methods will give the desired output
      ...{ [change[key] || key]: obj[key] }, // Rename keys based on the keysMap, otherwise keep the original key - Both methods will give the desired output
    }),
    {}
  );
};

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
