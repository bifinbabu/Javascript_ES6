// 50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.

const get_Meridiem_Suffix_Of_Integer = (num) =>
  // Check various cases and return the appropriate suffix.
  num === 0 || num === 24
    ? 12 + "am"
    : num === 12
    ? 12 + "pm"
    : num < 12
    ? (num % 12) + "am"
    : (num % 12) + "pm";

// Test cases
console.log(get_Meridiem_Suffix_Of_Integer(0)); // Output: '12am'
console.log(get_Meridiem_Suffix_Of_Integer(11)); // Output: '11am'
console.log(get_Meridiem_Suffix_Of_Integer(12)); // Output: '12pm'
console.log(get_Meridiem_Suffix_Of_Integer(13)); // Output: '1pm'
console.log(get_Meridiem_Suffix_Of_Integer(24)); // Output: '12am'
console.log(get_Meridiem_Suffix_Of_Integer(25)); // Output: '1pm'
