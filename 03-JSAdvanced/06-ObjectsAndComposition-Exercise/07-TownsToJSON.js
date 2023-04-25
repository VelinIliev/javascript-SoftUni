function main(input) {
    let towns = []
    input.shift()
    input.forEach(data => {
        let [town, Latitude, Longitude] = data.split(" | ");
        town = town.replace("| ", "");
        Latitude = Number(Latitude).toFixed(2)
        Longitude = Number(Longitude.replace(" |", "")).toFixed(2)
        towns.push({Town: town, Latitude: Latitude * 1, Longitude: Longitude * 1})
    });
    return JSON.stringify(towns);
}

console.log(main([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));