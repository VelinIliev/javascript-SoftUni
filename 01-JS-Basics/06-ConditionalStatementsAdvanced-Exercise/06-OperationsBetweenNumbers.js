function main(params) {
    let number1 = params[0] * 1;
    let number2 = params[1] * 1;
    let operator = params[2];

    if (operator == "+") {
        let sum = number1 + number2;
        console.log(`${number1} ${operator} ${number2} = ${sum} - ${sum % 2 == 0 ? 'even' : 'odd'}`);
    } else if (operator == "-") {
        let substract = number1 - number2;
        console.log(`${number1} ${operator} ${number2} = ${substract} - ${substract % 2 == 0 ? 'even' : 'odd'}`);
    } else if (operator == "*") {
        let multiply = number1 * number2;
        console.log(`${number1} ${operator} ${number2} = ${multiply} - ${multiply % 2 == 0 ? 'even' : 'odd'}`);
    } else if (number2 == 0) {
        console.log(`Cannot divide ${number1} by zero`);
    } else if (operator == "/") {
        let divide = number1 / number2;
        console.log(`${number1} ${operator} ${number2} = ${divide.toFixed(2)}`)
    } else if (operator == "%") {
        let modolus = number1 % number2;
        console.log(`${number1} ${operator} ${number2} = ${modolus}`)
    }
}

main(["10", "12", "+"]);
main(["123", "12", "/"]);
main(["112", "0", "/"]);
main(["10", "1", "-"]);
main(["10", "3", "%"]);
main(["10", "0", "%"]);
main(["7", "3", "*"]);
