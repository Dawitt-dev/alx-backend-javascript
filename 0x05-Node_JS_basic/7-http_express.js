// Import the necessary modules
const express = require('express');
const fs = require('fs');

// Function to count students from the CSV file
const countStudents = (databasePath) => new Promise((resolve, reject) => {
  fs.readFile(databasePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      if (lines.length <= 1) {
        resolve('No students found');
      } else {
        const students = {};
        const fields = lines[0].split(',');

        // Iterate over the lines starting from the second line
        for (let i = 1; i < lines.length; i += 1) {
          const studentData = lines[i].split(',');
          if (studentData.length === fields.length) {
            const field = studentData[3]; // Assuming the field is in the 4th column
            const firstName = studentData[0]; // Assuming the first name is in the 1st column

            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstName);
          }
        }

        let output = `Number of students: ${lines.length - 1}\n`;
        for (const [field, names] of Object.entries(students)) {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        resolve(output.trim());
      }
    }
  });
});

// Create an instance of Express
const app = express();

// Define the route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the route for /students
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.send('No database provided');
    return;
  }
  countStudents(databasePath)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server is listening on port 1245');
});

// Export the app variable
module.exports = app;
