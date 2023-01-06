function main(input) {
    let dictionary = {}
    for (let i = 0; i < input.length; i++) {
        let current = JSON.parse(input[i]);
        let term = Object.keys(current);
        let definition = Object.values(current);
        if (term in dictionary) {
            dictionary[term] = definition;
        } else {
            dictionary[term] = definition
        }
    }
    // dictionary.sort()
    let sorted = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {});
    let sorted_dict = sorted(dictionary);
    for (let key in sorted_dict) {
        console.log(`Term: ${key} => Definition: ${sorted_dict[key]}`);
    }    
}

main([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )