function main(onstock, delivery) {
    let products = {}
    for (let i = 0; i < onstock.length; i += 2) {
        let name = onstock[i];
        let quantity = onstock[i+1] * 1;
        products[name] = quantity;
    }
    for (let i = 0; i < delivery.length; i += 2) {
        let name = delivery[i];
        let quantity = delivery[i+1] * 1;
        if (name in products) {
            products[name] += quantity;
        } else {
            products[name] = quantity
        }
    }
    for (let key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
}

main(
    [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )