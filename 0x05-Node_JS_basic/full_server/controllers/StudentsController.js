import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      let output = 'This is the list of our students\n';

      for (const [field, names] of Object.entries(students).sort()) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const databasePath = process.argv[2];
      const { major } = req.params;

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const students = await readDatabase(databasePath);
      const names = students[major] || [];

      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
