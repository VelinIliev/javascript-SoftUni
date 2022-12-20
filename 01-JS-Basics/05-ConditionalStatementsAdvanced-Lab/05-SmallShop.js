function main(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2])
    let price = 0;
    if (town == 'Sofia') {
        if (product == 'coffee'){
            price = quantity * .5;
        } else if (product == 'water') {
            price = quantity * .8;
        } else if (product == 'beer') {
            price = quantity * 1.2;
        } else if (product == 'sweets') {
            price = quantity * 1.45;
        } else if (product == 'peanuts') {
            price = quantity * 1.6;
        }
    } else if (town == "Plovdiv") {
        if (product == 'coffee'){
            price = quantity * .4;
        } else if (product == 'water') {
            price = quantity * .7;
        } else if (product == 'beer') {
            price = quantity * 1.15;
        } else if (product == 'sweets') {
            price = quantity * 1.30;
        } else if (product == 'peanuts') {
            price = quantity * 1.50;
        }
    } else if (town == 'Varna') {
        if (product == 'coffee'){
            price = quantity * .45;
        } else if (product == 'water') {
            price = quantity * .7;
        } else if (product == 'beer') {
            price = quantity * 1.10;
        } else if (product == 'sweets') {
            price = quantity * 1.35;
        } else if (product == 'peanuts') {
            price = quantity * 1.55;
        }
    }
    console.log(price);
}

main(["coffee", "Varna", "2"]);
main(["peanuts", "Plovdiv", "1"]);
main(["beer", "Sofia", "6"]);
main(["water", "Plovdiv", "3"]);
main(["sweets", "Varna", "0.635"]);
