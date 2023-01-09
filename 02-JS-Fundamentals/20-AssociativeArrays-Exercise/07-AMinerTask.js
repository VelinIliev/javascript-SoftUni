function main(input) {
    let resources = {};
    for (let i = 0; i < input.length; i += 2) {
        let [resource, quantity] = [input[i], input[i+1] * 1];
        if (resource in resources) {

        } else {
            resources[resource] = 0;
        }
        resources[resource] += quantity
    }
    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

main([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]    
    )