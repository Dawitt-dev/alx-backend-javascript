// js/main.ts

// Define DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implement Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Implement createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Example usage and expected results for createEmployee
console.log(createEmployee(200));  // Output: Teacher instance
console.log(createEmployee(1000)); // Output: Director instance
console.log(createEmployee('$500'));// Output: Director instance

// Function to display the createEmployee result in the browser
function displayEmployeeInfo(employee: Director | Teacher): void {
    const info = `
        <p>Work From Home: ${employee.workFromHome()}</p>
        <p>Coffee Break: ${employee.getCoffeeBreak()}</p>
        <p>Tasks: ${employee instanceof Director ? employee.workDirectorTasks() : employee.workTeacherTasks()}</p>
    `;

    const container = document.createElement('div');
    container.innerHTML = info;
    document.body.appendChild(container);
}

// Define the string literal type named Subjects
type Subjects = 'Math' | 'History';

// Write the function teachClass
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

// Function to display the teachClass result in the browser
function displayTeachClass(todayClass: Subjects): void {
    const result = teachClass(todayClass);
    const container = document.createElement('div');
    container.innerHTML = `<p>${result}</p>`;
    document.body.appendChild(container);
}

// Example usage and expected results for teachClass
console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

document.addEventListener("DOMContentLoaded", () => {
    displayEmployeeInfo(createEmployee(200));
    displayEmployeeInfo(createEmployee(1000));
    displayEmployeeInfo(createEmployee('$500'));

    displayTeachClass('Math');
    displayTeachClass('History');
});
