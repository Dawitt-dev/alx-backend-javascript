// Define the function updateStudentGradeByCity
function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map over the filtered students to update their grades
  return studentsInCity.map((student) => {
    // Find the grade object for the current student
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // Return a new student object with the updated grade
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
