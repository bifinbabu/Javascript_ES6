// 4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

const csvToJson = (data, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);

  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};

console.log(csvToJson("col1,col2\na,b\nc,d")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(csvToJson("col1;col2\na;b\nc;d", ";")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

// Source: https://bit.ly/2neWfJ2

// Define a function called `CSV_to_JSON` that converts CSV data to a JSON array.
const CSV_to_JSON = (data, delimiter = ",") => {
  // Extract titles from the first row of the CSV data.
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  // Split the CSV data by newline characters, map each row to a JSON object with titles as keys.
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      // Create a JSON object using titles and corresponding values.
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};

// Test cases
console.log(CSV_to_JSON("col1,col2\na,b\nc,d")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON("col1;col2\na;b\nc;d", ";")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
