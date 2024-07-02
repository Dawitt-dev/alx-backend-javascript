// Create a WeakMap instance
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count of calls for the endpoint
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // If the count is greater than or equal to 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
