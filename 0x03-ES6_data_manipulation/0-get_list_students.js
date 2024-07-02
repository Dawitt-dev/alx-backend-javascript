// Define the function getListStudents
function getListStudents() {
  // Create an array of student objects
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  // Return the array
  return students;
}

// Export the function (if using ES6 modules)
export default getListStudents;
