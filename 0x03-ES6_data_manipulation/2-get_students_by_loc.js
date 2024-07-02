// Define the function getStudentsByLocation
function getStudentsByLocation(students, city) {
  // Use filter to get students in the specified city
  return students.filter((student) => student.location === city);
}

// Export the function (if using ES6 modules)
export default getStudentsByLocation;
