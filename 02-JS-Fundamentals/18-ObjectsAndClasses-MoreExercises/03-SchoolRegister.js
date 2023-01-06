function main(input) {
    let students = [];
    let grades = {}
    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(", ");
        let student = {}
        for (let k = 0; k < data.length; k++) {
            let key = data[k].split(": ")[0];
            let value = data[k].split(": ")[1];
            student[key] = value
        }
        students.push(student)
    }
    for (let key in students) {
        let grade = students[key]["Grade"] * 1 + 1;
        let name = students[key]["Student name"];
        let score = students[key]["Graduated with an average score"] * 1;
        if (score < 3 ) {
            continue
        }
        if (grades[grade] === undefined) {
            grades[grade] = {}
        } 
        grades[grade][name] = score
    }
    for (let key in grades) {
        console.log(`${key} Grade`);
        let students = [];
        let sum = 0;
        for (let key2 in grades[key]) {
            students.push(key2);
            sum += grades[key][key2];
        }
        console.log(`List of students: ${students.join(", ")}`);
        console.log(`Average annual score from last year: ${(sum / students.length).toFixed(2)}`);
        console.log();
    }
}


main([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])
    
main([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ])
    