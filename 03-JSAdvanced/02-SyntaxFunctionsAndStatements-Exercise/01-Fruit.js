function main(fruit, grams, price) {
    let money = ((grams/1000) * price).toFixed(2);
    console.log(`I need $${money} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}

main('orange', 2500, 1.80)