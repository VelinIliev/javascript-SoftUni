function main(params) {
    let tabs = params[0] * 1;
    let salary = params[1] * 1;
    for (let i = 2; i <= tabs + 1; i++) {
        if (params[i] == "Facebook") {
            salary -= 150;
        } else if (params[i] == 'Instagram') {
            salary -= 100;
        } else if (params[i] == 'Reddit') {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log('You have lost your salary.');
            break;
        }
    }
    if (salary > 0) {
        console.log(salary.toFixed(0));
    } 
}

main(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
main(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])
main(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);