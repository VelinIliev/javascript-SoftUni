function main(input) {
    let products = {
        "A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "H": [], "I": [], "J": [], "K": [], "L": [], "M": [], 
        "N": [], "O": [], "P": [], "Q": [], "R": [], "S": [], "T": [], "U": [], "V": [], "W": [], "X": [], "Y": [], "Z": []
    }
    input.forEach(data => {
        let [productName, price] = data.split(" : ");
        products[productName[0]].push({name: productName, price: price * 1})
    });
    for (const key in products) {
        if (products[key].length > 0){
            console.log(key);
            let sorted = products[key].sort((a,b) => a.name.localeCompare(b.name)) ;
            for (const key2 in sorted) {
                console.log(`${sorted[key2].name}: ${sorted[key2].price}`);
            }
        }
    }
}

main(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])

// main([
//     'Banana : 2',
//     "Rubic's Cube : 5",
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10'
//     ])