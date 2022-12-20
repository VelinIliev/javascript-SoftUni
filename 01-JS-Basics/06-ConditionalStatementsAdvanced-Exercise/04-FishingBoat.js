function main(params) {
    let budget = params[0] * 1;
    let season = params[1];
    let fishermens = params[2] * 1;
    let price ;
    if (season == 'Spring') {
        price = 3000;
    } else if (season == 'Winter') {
        price = 2600;
    } else {
        price = 4200;
    }
    if (fishermens <= 6 ){
        price *= .9;
    } else if (fishermens <= 11) {
        price *= .85;
    } else {
        price *= .75;
    }
    if (fishermens % 2 == 0 && season != 'Autumn') {
        price *= .95;
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

main(["3000", "Summer", "11"]); 
main(["3600", "Autumn", "6"]); 
main(["2000", "Winter", "13"]); 
