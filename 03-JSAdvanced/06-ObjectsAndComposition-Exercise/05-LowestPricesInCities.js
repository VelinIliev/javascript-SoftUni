function main(input) {
    let cheapestProducts = {}
    input.forEach(element => {
        let [town, product, price] = element.split(" | ");
        if (cheapestProducts[product] === undefined){
            cheapestProducts[product] = {"price": price * 1, town}
        } else {
            if (cheapestProducts[product].price > price * 1){
                cheapestProducts[product].price = price * 1;
                cheapestProducts[product].town = town;
            }
        };
    }); 
    for (const key in cheapestProducts) {
        console.log(`${key} -> ${cheapestProducts[key].price} (${cheapestProducts[key].town})`);
    }
}

// main([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
//     ])

main([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
])