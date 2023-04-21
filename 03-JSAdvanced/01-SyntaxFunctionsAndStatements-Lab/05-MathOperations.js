function main(num1, num2, operator) {
    let operators = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x % y,
        "**": (x, y) => x ** y
    }
    console.log(operators[operator](num1, num2));
}

main(4, 3, '**')
main(3, 5.5, '*')