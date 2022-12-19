function main(input) {
    let number = input[0] * 1;
    let bonus = 0;
    if (number <= 100) {
        bonus += 5;
    } else if (number <= 1000) {
        bonus += number * .2;
    } else {
        bonus += number * .1;
    }
    if (number % 2 == 0){
        bonus += 1;
    }
    let lastDigit = String(number).slice(-1);
    if (lastDigit === '5') {
        bonus += 2;
    }
    console.log(bonus);
    console.log(number + bonus);
}

main(["20"]);
main(["175"]);
main(["2703"]);
main(["15875"]);
