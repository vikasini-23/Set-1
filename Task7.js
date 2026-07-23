// Program: Student Record System - Skip or Stop Early

// Create an array of student objects
let students = [
    { name: "Vikasini", marks: 85 },
    { name: "Anita", marks: 40 },
    { name: "Rahul", marks: 78 },
    { name: "Sneha", marks: 90 }
];

// Use a loop with continue and break
for (let i = 0; i < students.length; i++) {
    // Skip students who scored below 50
    if (students[i].marks < 50) {
        continue;  // skips this iteration
    }

    // Stop the loop if a student scores above 88
    if (students[i].marks > 88) {
        console.log("High scorer found: " + students[i].name);
        break;  // exits the loop early
    }

    // Print student details
    console.log("Name: " + students[i].name + ", Marks: " + students[i].marks);
}

// Expected Output:
// Name: Vikasini, Marks: 85
// Name: Rahul, Marks: 78
// High scorer found: Sneha
