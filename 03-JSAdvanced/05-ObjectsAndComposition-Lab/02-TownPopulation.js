function main(input) {
    let cities = {}

    input.forEach(data => {
        let [city, population] = data.split(" <-> ")
        if (city in cities){
            cities[city] += population * 1
        } else {
            cities[city] = population * 1;
        }        
    });
    
    for (const key in cities) {
        console.log(`${key} : ${cities[key]}`);
    }
}


main([
    'Sofia <-> 1200000',
    'Sofia <-> 1300000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
    ])