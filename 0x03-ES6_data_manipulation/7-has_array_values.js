// Define the function hasValuesFromArray
function hasValuesFromArray(set, array) {
  // Use every to check if all elements in the array exist in the set
  return array.every((element) => set.has(element));
}

// Export the function (if using ES6 modules)
export default hasValuesFromArray;
