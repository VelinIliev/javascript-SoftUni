function main(product, quantity) {
    let products = {
        'coffee': 1.50,
        'water': 1,
        'coke': 1.4,
        'snacks': 2,
    }
    console.log((products[product] * quantity).toFixed(2));
}

main("water", 5)
main("coffee", 2)