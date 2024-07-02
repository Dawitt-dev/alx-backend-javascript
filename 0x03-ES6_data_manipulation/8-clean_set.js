// Define the function cleanSet
function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  // Convert the Set to an array and process the values
  const result = Array.from(set)
    .filter((value) => value.startsWith(startString)) // Filter values that start with startString
    .map((value) => value.slice(startString.length)) // Remove the startString part from each value
    .join('-'); // Join the values with a hyphen

  return result;
}

// Export the function (if using ES6 modules)
export default cleanSet;
