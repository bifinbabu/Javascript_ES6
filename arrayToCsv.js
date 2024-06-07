// 5. Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.

function jsonToCsv(arr, columns, delimiter = ",") {
  let str = columns.join(delimiter).concat("\n");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (j < columns.length - 1) {
        str = str
          .concat(
            arr[i][columns[j]] ? `"${arr[i][columns[j]].toString()}"` : `""`
          )
          .concat(delimiter);
      } else {
        str = str.concat(
          arr[i][columns[j]] ? `"${arr[i][columns[j]].toString()}"` : `""`
        );
      }
    }
    str = str.concat("\n");
  }
  return str;
}

console.log(
  jsonToCsv(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
console.log(
  jsonToCsv(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"],
    ";"
  )
);

//  Better method
const JSON_to_CSV = (arr, columns, delimiter = ",") =>
  [
    // Combine column titles with the delimiter.
    columns.join(delimiter),
    // Map each object in the array to a CSV row.
    ...arr.map((obj) =>
      // For each object, reduce the values corresponding to the specified columns into a CSV row.
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`, // Format value within double quotes.
        ""
      )
    ),
  ].join("\n"); // Join rows with newline characters.

//   Map Each Object to a CSV Row:

// javascript
// Copy code
// ...arr.map((obj) =>
//   columns.reduce(
//     (acc, key) =>
//       `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
//     ""
//   )
// )
//
// This line does the heavy lifting:

// arr.map((obj) => ...): Iterates over each object in the array.
// columns.reduce(...): For each object, it reduces the specified columns into a single CSV row string.
// acc: Accumulator string for the current row.
// key: Current column name being processed.
// acc.length ? "" : delimiter: Determines if a delimiter should be added (skip for the first element).
// !obj[key] ? "" : obj[key]: Checks if the object has a value for the current column. If it does, the value is included in the CSV; otherwise, an empty string is included.
// "${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}": Constructs the CSV row with values wrapped in double quotes.

// Test cases
console.log(
  JSON_to_CSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"],
    ";"
  )
);
console.log(
  JSON_to_CSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
