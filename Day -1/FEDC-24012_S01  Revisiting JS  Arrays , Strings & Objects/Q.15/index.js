
let students = [
    {
        name: "Alice",
        age: 20,
        marks: { math: 85, science: 90, english: 88 }
    },
    {
        name: "Charlie",
        age: 19,
        marks: { math: 80, science: 85, english: 83 }
    },
    {
        name: "Diana",
        age: 22,
        marks: { math: 78, science: 88, english: 91 }
    }
];


students.push({
    name: "Bob",
    age: 21,
    marks: { math: 95, science: 90, english: 95 }
});


let topStudent = null;
let highestAverage = 0;

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalMarks = student.marks.math + student.marks.science + student.marks.english;
    let averageMarks = totalMarks / 3;

    console.log(`${student.name}'s average marks: ${averageMarks.toFixed(2)}`);

    
    if (averageMarks > highestAverage) {
        highestAverage = averageMarks;
        topStudent = student;
    }
}


console.log(`The top student is ${topStudent.name} with an average of ${highestAverage.toFixed(2)}.`);
