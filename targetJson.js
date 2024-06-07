// 6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.

// const dig = (obj, target) => {
//   return target in obj // Check if the target key exists in the object.
//     ? obj[target] // If found, return its value.
//     : Object.values(obj).reduce((acc, val) => {
//         // If not found, recursively search in nested objects.
//         if (acc !== undefined) return acc; // If the target is already found, return it.
//         if (typeof val === "object") return dig(val, target); // If the current value is an object, recursively search within it.
//       }, undefined); // Default return value if the target is not found.
// };

const dig = (obj, target) => {
  return target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return dig(val, target);
      }, undefined);
};

// Test cases
const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};
const data1 = {
  level1: {
    level2: {
      level3: "some data",
    },
    level3: "test",
  },
};
const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};
console.log(dig(data, "level3")); // Output: 'some data'
console.log(dig(data1, "level3"));
console.log(dig(data, "level4")); // Output: undefined
console.log(dig(dog, "message")); // Output: 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg'
