function main(...params) {
    let dict = params[0];
    for (const property in dict) {
        console.log(`${property} -> ${dict[property]}`);
      }
}

main({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})