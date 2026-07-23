// Program: Student Record System - Remove & Sort

// Create an array of student objects
let students = [
    { name: "Vikasini", marks: 85 },
    { name: "Anita", marks: 40 },
    { name: "Rahul", marks: 78 },
    { name: "Sneha", marks: 90 }
];

// Remove an entry using pop() (removes last student)
students.pop();

// Or use shift() (removes first student)
// students.shift();

// Sort students by marks (ascending order)
students.sort(function(a, b) {
    return a.marks - b.marks;
});

// Print sorted student details
for (let i = 0; i < students.length; i++) {
    console.log("Name: " + students[i].name + ", Marks: " + students[i].marks);
}

// Expected Output (after pop and sort):
// Name: Anita, Marks: 40
// Name: Rahul, Marks: 78
// Name: Vikasini, Marks: 85
