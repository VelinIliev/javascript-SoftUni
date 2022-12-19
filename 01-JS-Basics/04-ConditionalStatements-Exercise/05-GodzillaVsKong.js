function main(input) {
    let budget = input[0] * 1;
    let redundants = input[1] * 1;
    let costume_price = input[2] * 1;
    let decor = budget * .1;
    if (redundants > 150) {
        costume_price *= .9;
    }
    let total = redundants * costume_price + decor;
    if (budget < total) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }
}

main(["20000", "120", "55.5"]); 
main(["15437.62", "186", "57.99"]);
main(["9587.88", "222", "55.68"]);


