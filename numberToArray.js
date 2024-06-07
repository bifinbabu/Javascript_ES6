// 7. Write a JavaScript program to convert a specified number into an array of digits.

const digitize = (num) => {
  let nString = num.toString();
  return nString.split("").map((i) => parseInt(i));
};

console.log(digitize(123)); // Output: [1, 2, 3]
console.log(digitize(1230)); // Output: [1, 2, 3, 0]
console.log(digitize(1));

// Other method
const digitize1 = (n) =>
  // Convert the number to a string, then split it into an array of characters.
  [...`${n}`]
    // Map each character to its corresponding integer value.
    .map((i) => parseInt(i));

// Test cases
console.log(digitize1(123)); // Output: [1, 2, 3]
console.log(digitize1(1230)); // Output: [1, 2, 3, 0]

// Other method
function numberToDigitsArray(num) {
  const digits = [];
  // Handle negative numbers
  const isNegative = num < 0;
  num = Math.abs(num);

  if (num === 0) {
    return [0];
  }

  while (num > 0) {
    const digit = num % 10; // Get the last digit
    digits.push(digit); // Add the digit to the array
    num = Math.floor(num / 10); // Remove the last digit
  }

  // Reverse the array since we extracted digits from the end
  digits.reverse();

  // If the original number was negative, handle it accordingly
  if (isNegative) {
    digits[0] = -digits[0];
  }

  return digits;
}

// Test cases
console.log(numberToDigitsArray(12345)); // Output: [1, 2, 3, 4, 5]
console.log(numberToDigitsArray(-6789)); // Output: [-6, 7, 8, 9]
console.log(numberToDigitsArray(0)); // Output: [0]
