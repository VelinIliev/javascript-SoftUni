function main(input) {
    let cars = {}

    input.forEach(car => {
        let [brand, model, quantity] = car.split(" | ");
        if (!(brand in cars)) {
            cars[brand] = {}
        }
        if (!(model in cars[brand])){
            cars[brand][model] = 0
        }
        cars[brand][model] += quantity * 1
    });
    
    for (const brand in cars) {
        console.log(brand);
        for (const model in cars[brand]) {
            console.log(`###${model} -> ${cars[brand][model]}`);
        }
    }
}


main([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])