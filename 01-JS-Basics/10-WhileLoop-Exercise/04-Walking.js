function main(params) {
    let target_steps = 10000;
    let steps_for_day = 0;
    let index = 0
    while (index < params.length ) {
        let current_steps = params[index];
        if (current_steps == 'Going home') {
            current_steps = params[index + 1] * 1;
            steps_for_day += current_steps
            break;
        } else {
            current_steps = current_steps * 1;
            steps_for_day += current_steps;
        }
        // console.log(current_steps);
        index++;
    }
    if (steps_for_day >= target_steps) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps_for_day - target_steps} steps over the goal!`);
    } else {
        console.log(`${target_steps - steps_for_day } more steps to reach goal.`);
    }
    
}

main(["1000", "1500", "2000", "6500"]);
console.log();
main(["1500", "300", "2500", "3000", "Going home", "200"]);
console.log();
main(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
console.log();
main(["125", "250", "4000", "30", "2678", "4682"]);


