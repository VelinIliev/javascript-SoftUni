function main(params) {
    let num_string = String(params);
    let odd_sum = 0;
    let even_sum = 0;
    for (let i = 0; i < num_string.length; i++) {
        let current_number = num_string[i] * 1;
        if (current_number % 2 === 0) {
            even_sum += current_number;
        } else {
            odd_sum += current_number
        }
    }
    console.log(`Odd sum = ${odd_sum}, Even sum = ${even_sum}`);
}

main(1000435);
main(3495892137259234)