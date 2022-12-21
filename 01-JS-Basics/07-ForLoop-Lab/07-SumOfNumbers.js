function main(params) {
    let string_of_numbers = params[0];
    let total = 0
    for (let i = 0; i < string_of_numbers.length; i++) {
        total += string_of_numbers[i] * 1; 
    }
    console.log(`The sum of the digits is:${total}`);
}

main(["1234"]);
main(["564891"]);