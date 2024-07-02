// Define the function getStudentIdsSum
function getStudentIdsSum(students) {
  // Use reduce to sum the ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

// Export the function (if using ES6 modules)
export default getStudentIdsSum;
