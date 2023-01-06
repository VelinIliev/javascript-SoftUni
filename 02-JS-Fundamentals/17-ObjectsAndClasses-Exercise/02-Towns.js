function main(input) {
    let towns = []
    let id = 0;
    for (let i = 0; i < input.length; i++) {
        id ++;
        let data = input[i].split(" | ");
        let name = data[0];
        let latitude = (data[1] * 1).toFixed(2)
        let longitude  = (data[2] * 1).toFixed(2)
        towns.push({'town': name, 'latitude': latitude, 'longitude': longitude})
    }
    towns.forEach(element => {console.log(element)});
}

main(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)