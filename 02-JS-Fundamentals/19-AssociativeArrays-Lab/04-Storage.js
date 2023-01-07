function main(input) {
    let storage = {};
    input.forEach(el => {
        let data = el.split(" ");
        let product = data[0];
        let quantity = data[1] * 1;
        if (product in storage) {
            storage[product] += quantity;
        } else {
            storage[product] = quantity;
        }
    });
    for (let key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}

main(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)