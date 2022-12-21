function main(params) {
    let name = params[0];
    let index = 1;
    let grades_sum = 0; 
    let gratueted = true;
    while (index < params.length) {
        let current_grade = params[index] * 1;
        if (current_grade >= 4) {
            grades_sum += params[index] * 1;
        } else {
            console.log(`${name} has been excluded at ${index} grade`);
            gratueted = false;
            break;
        }
        index++;
    }
    if (gratueted) {
        let avg_grade = grades_sum / (params.length - 1);
        console.log(`${name} graduated. Average grade: ${avg_grade.toFixed(2)}`);
    }
    
}

main(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
main(["Mimi",  "5", "6", "5", "6", "5", "6", "6", "2", "3"])
