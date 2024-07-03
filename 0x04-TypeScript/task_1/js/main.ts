// js/main.ts

// Task 1: Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Task 2: Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create an instance of Directors
const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(director1);

// Function to display the director object in the browser
function displayDirector(director: Directors): void {
    const directorInfo = `
        <p>First Name: ${director.firstName}</p>
        <p>Last Name: ${director.lastName}</p>
        <p>Full Time Employee: ${director.fullTimeEmployee}</p>
        <p>Location: ${director.location}</p>
        <p>Number of Reports: ${director.numberOfReports}</p>
    `;

    const container = document.createElement('div');
    container.innerHTML = directorInfo;
    document.body.appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
    displayDirector(director1);
});

// Task 3: Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Function to display the printTeacher result in the browser
function displayTeacherPrint(firstName: string, lastName: string): void {
    const teacherPrint = printTeacher(firstName, lastName);

    const container = document.createElement('div');
    container.innerHTML = `<p>${teacherPrint}</p>`;
    document.body.appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
    displayTeacherPrint("John", "Doe");
});

// Task 4: Define the StudentClassInterface
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Create an instance of StudentClass
const student = new StudentClass("John", "Doe");

console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());    // Output: John

// Function to display the student class information in the browser
function displayStudentClassInfo(student: StudentClass): void {
    const studentInfo = `
        <p>First Name: ${student.displayName()}</p>
        <p>Work Status: ${student.workOnHomework()}</p>
    `;

    const container = document.createElement('div');
    container.innerHTML = studentInfo;
    document.body.appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
    displayStudentClassInfo(student);
});