// Program: Student Record System - Add & Find

// Create an array of student objects
let students = [
    { name: "Vikas", marks: 85 },
    { name: "Anita", marks: 40 },
    { name: "Rahul", marks: 78 },
    { name: "Sneha", marks: 90 }
];

// Add a new student using push()
students.push({ name: "Meera", marks: 95 });

// Find the student with the highest marks
let highest = students[0];  // assume first student initially
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highest.marks) {
        highest = students[i];
    }
}

// Print the student with highest marks
console.log("Topper: " + highest.name + ", Marks: " + highest.marks);

// Expected Output:
// Topper: Meera, Marks: 95
