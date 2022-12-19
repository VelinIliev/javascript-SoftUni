function main(input) {
    number1 = input[0] * 1;
    number2 = input[1] * 1;
    if (number1 > number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}

main(["5", "3"]);
main(["3", "5"]);
main(["10", "10"]);
main(["-5", "5"]);
