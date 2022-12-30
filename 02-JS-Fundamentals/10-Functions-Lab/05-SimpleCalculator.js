function main(number1, number2, operation) {
    let operations = {
        'multiply': '*',
        'divide': '/',
        'add': '+',
        'subtract': '-'
    }
    console.log(eval(`${number1}${operations[operation]}${number2}`));
}

main(5, 5, 'multiply');
main(40, 8, 'divide');
main(12, 19, 'add');
main(50, 13, 'subtract')