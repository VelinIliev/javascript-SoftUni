function main(params) {
    let needed_money = params[0] * 1;
    let money = params[1] * 1;
    let index = 2;
    let days_of_spend = 0;
    let days = 0;
    while (index < params.length) {
        if (index % 2 == 0) {
            days++;
            let command = params[index];
            let amount = params[index + 1] * 1;
            if (command == 'spend') {
                money -= amount
                days_of_spend +=1;
                if (money < 0) {
                    money = 0;
                }  
            } else if (command == 'save') {
                money += amount
                days_of_spend = 0;
            }
            if (money >= needed_money) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
            if (days_of_spend == 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
        }
        index ++;
    }    
}

main(["2000", "1000", "spend", "1200", "save", "2000"]);
main(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])
main(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
