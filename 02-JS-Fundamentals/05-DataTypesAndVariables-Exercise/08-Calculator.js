function main(number1, operator, number2) {
    console.log(eval(`${number1} ${operator} ${number2}`).toFixed(2));
}


main(5, '+', 10);
main(25.5, '-', 3)