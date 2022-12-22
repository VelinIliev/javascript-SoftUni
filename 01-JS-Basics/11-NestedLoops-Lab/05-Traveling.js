function main(params) {
    let index = 0;
    let current_destination = '';
    let needed_budget = 0;
    let current_budget = 0;
    while (index < params.length) {
        if (isNaN(params[index])) {
            let destination = params[index];
            if (destination == "End") {
                break;
            } else {
                current_destination = destination;
                needed_budget = params[index + 1] * 1;
                index++;
            }
        } else {
            current_budget += params[index] * 1;
            if (current_budget >= needed_budget) {
                console.log(`Going to ${current_destination}!`);
                current_budget = 0;
            }
        }
        index++;
    }
}

main(["Greece", "1000", "200", "200", "300", "100", "150", "240", 
"Spain", "1200", "300", "500", "193", "423", "End"]);
console.log();
main(["France", "2000", "300", "300", "200", "400", "190", "258", "360",
"Portugal", "1450", "400", "400", "200", "300", "300",
"Egypt","1900", "1000", "280", "300", "500", "End"])
