function main(input) {
    let calories = {}
    for (let i = 0; i < input.length; i += 2) {
        calories[input[i]] = input[i + 1] * 1;
    }
    console.log(calories);
}

main(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])