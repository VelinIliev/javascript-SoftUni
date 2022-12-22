function main(params) {
    let money = params[0] * 1;
    let needed_coins = 0;
    let coins = [2, 1, .5, .2, .1, .05, .02, .01];

    coins.forEach(element => {
        while (true) {
            if ((money.toFixed(2) - element) >= 0 ) {
                needed_coins += 1;
                money -= element;
            } else {
                break;
            }
        }
    });
    
    console.log(needed_coins );
} 

main(["1.23"]);
main(["2"]);
main(["3"]);
main(["2.73"]);