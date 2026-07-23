// Program: Student Record System - Iterate Over Records

// Create an array of student objects
let students = [
    { name: "Vikasini", age: 20, marks: 85 },
    { name: "Anita", age: 21, marks: 90 },
    { name: "Rahul", age: 19, marks: 78 },
    { name: "Sneha", age: 22, marks: 88 }
];

// Use a loop to print each student's details
for (let i = 0; i < students.length; i++) {
    console.log("Name: " + students[i].name + 
                ", Age: " + students[i].age + 
                ", Marks: " + students[i].marks);
}

// Expected Output:
// Name: Vikasini, Age: 20, Marks: 85
// Name: Anita, Age: 21, Marks: 90
// Name: Rahul, Age: 19, Marks: 78
// Name: Sneha, Age: 22, Marks: 88
