function main(params) {
    let budget = params[0] * 1;
    let season = params[1];
    let destination;
    let type_of_vacation;
    let money_spend = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == 'summer') {
            money_spend = budget * .3;
        } else {
            money_spend = budget * .7;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season == 'summer') {
            money_spend = budget * .4;
        } else {
            money_spend = budget * .8;
        }
    } else {
        destination = 'Europe';
        money_spend = budget * .9;
    }
    if (destination == 'Europe') {
        type_of_vacation = 'Hotel'
    } else if (season == "summer") {
        type_of_vacation = "Camp"
    } else if (season == "winter") {
        type_of_vacation = 'Hotel'
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type_of_vacation} - ${money_spend.toFixed(2)}`);
}

main(["50", "summer"]);
main(["75", "winter"]);
main(["312", "summer"]);
main(["678.53", "winter"]);
main(["1500", "summer"]);
