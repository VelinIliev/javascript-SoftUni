function main(params) {
    let number = params[0] * 1;
    let current_number = 1;
    while (current_number <= number) {
        console.log(current_number);
        current_number = current_number * 2 + 1;
    }
}

main(['3']);
console.log();
main(['8'])
console.log();
main(['17'])
console.log();
main(['31'])