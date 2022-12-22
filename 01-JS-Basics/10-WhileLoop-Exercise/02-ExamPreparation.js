function main(params) {
    let low_grades_awoled = params[0] * 1;
    let low_grades = 0;
    let index = 1;
    let count_problems = 0;
    let sum_of_grades = 0;
    let last_problem = '';
    let break_x = false;

    while (index < params.length) {
        let command = params[index];
        if (command == 'Enough') {
            break;
        }
        if (index % 2 != 0) {
            count_problems ++;
            let problem = params[index];
            let grade = params[index + 1] * 1;
            sum_of_grades += grade;
            last_problem = problem;
            if (grade <= 4) {
                low_grades += 1;
            }
            if (low_grades == low_grades_awoled) {
                break_x = true;
                console.log(`You need a break, ${low_grades} poor grades.`);
                break;
            }
        }
        index ++;
    }
    if (break_x != true) {
        let avg_grade = sum_of_grades / count_problems;
        console.log(`Average score: ${avg_grade.toFixed(2)}`);
        console.log(`Number of problems: ${count_problems}`);
        console.log(`Last problem: ${last_problem}`);
    }
}

main(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
main((["2", "Income", "3", "Game Info", "6", "Best Player", "4"]))
