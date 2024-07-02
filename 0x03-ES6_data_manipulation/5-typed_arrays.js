// Define the function createInt8TypedArray
function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView for the buffer
  const view = new DataView(buffer);

  // Set the value at the specified position
  view.setInt8(position, value);

  // Return the DataView
  return view;
}

// Export the function (if using ES6 modules)
export default createInt8TypedArray;
