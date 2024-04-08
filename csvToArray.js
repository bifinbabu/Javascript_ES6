// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

const csvToArray = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((d) => d.split(delimiter));

console.log(csvToArray("a,b\nc,d")); // [['a', 'b'], ['c', 'd']]
console.log(csvToArray("a;b\nc;d", ";")); // [['a', 'b'], ['c', 'd']]
console.log(csvToArray("head1,head2\na,b\nc,d", ",", true)); // [['a', 'b'], ['c', 'd']]
