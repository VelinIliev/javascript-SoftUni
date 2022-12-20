function main(params) {
    const roses = 5;
    const dahlias = 3.8;
    const tulips = 2.8;
    const narcissus = 3;
    const gladiolus = 2.5;
    let flower = params[0];
    let quantity = params[1] * 1;
    let budget = params[2] * 1;
    let total = 0;
    if (flower == 'Roses') {
        total = quantity * roses;
        if (quantity > 80) {
            total = total * .9;
        }
    } else if (flower == 'Dahlias') {
        total = quantity * dahlias;
        if (quantity > 90) {
            total = total * .85;
        }
    } else if (flower == 'Tulips') {
        total = quantity * tulips;
        if (quantity > 80) {
            total = total * .85;
        }
    } else if (flower == 'Narcissus') {
        total = quantity * narcissus;
        if (quantity < 120) {
            total = total * 1.15;
        }
    } else if (flower == 'Gladiolus') {
        total = quantity * gladiolus;
        if (quantity < 80) {
            total = total * 1.2;
        }
    }
    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

main(["Roses", "55", "250"]);
main(["Tulips", "88", "260"]);
main(["Narcissus", "119", "360"]);