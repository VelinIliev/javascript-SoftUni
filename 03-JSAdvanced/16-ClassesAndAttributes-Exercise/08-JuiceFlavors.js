function main(input) {
    let juices = {};
    let bottles = {};

    input.forEach(el => {
        let [type, quantity] = el.split(" => ");
        if (!(type in juices)) {
            juices[type] = 0;
        }
        juices[type] += quantity * 1;

        while (juices[type] >= 1000) {
            juices[type] -= 1000;
            if (!(type in bottles)) {
                bottles[type] = 0;
            }
            bottles[type] += 1
        }
        
    });
    for (const key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

main([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])

console.log();

main([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])