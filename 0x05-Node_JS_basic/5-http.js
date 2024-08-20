// Import the necessary modules
const http = require('http');
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

// Create the server
const app = http.createServer((req, res) => {
  const { url } = req;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('No database provided');
      return;
    }
    countStudents(databasePath)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
