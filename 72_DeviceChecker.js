// 72. Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.

const detectDeviceType = () =>
  // Use a regular expression to test the userAgent string for common mobile device identifiers.
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile" // If any of the identifiers are found, return 'Mobile'.
    : "Desktop"; // Otherwise, return 'Desktop'.

// Example usage:
console.log(detectDeviceType()); // Outputs "Mobile" if the device is mobile, otherwise "Desktop".
