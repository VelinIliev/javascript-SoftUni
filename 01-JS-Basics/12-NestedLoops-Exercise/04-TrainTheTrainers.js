function main(params) {
    let jury_members = params[0] * 1;
    let command = params[1];
    let index = 1;
    let sum_grades = 0;
    let total_grades = 0; 
    while (command != 'Finish') {
        let course_name = command;
        let current_grades = 0;
        let current_total = 0
        for (let i = 1; i <= jury_members; i++) {
            current_grades += params[index + i] * 1;
            current_total += 1
        }
        console.log(`${course_name} - ${(current_grades / current_total).toFixed(2)}.`);
        sum_grades += current_grades;
        total_grades += current_total
        command = params[index + (jury_members + 1)];
        index += (jury_members + 1);
    }
    console.log(`Student's final assessment is ${(sum_grades / total_grades).toFixed(2)}.`);
}

main(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
console.log();
main((["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]))
console.log();
main(["2",
"Objects and Classes", "5.77", "4.23", 
"Dictionaries", "4.62", "5.02", 
"RegEx", "2.88", "3.42", "Finish"])

