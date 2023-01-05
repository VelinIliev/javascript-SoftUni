function main(params) {
    let person = JSON.parse(params);
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}


main('{"name": "George", "age": 40, "town": "Sofia"}')