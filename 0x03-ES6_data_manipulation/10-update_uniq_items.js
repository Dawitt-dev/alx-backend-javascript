// Define the function updateUniqueItems
function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the map
  for (const [key, value] of map.entries()) {
    // If the quantity is 1, update it to 100
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}

// Export the function (if using ES6 modules)
export default updateUniqueItems;
