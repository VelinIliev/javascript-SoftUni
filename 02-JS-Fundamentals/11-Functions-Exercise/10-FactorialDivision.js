function main(num1, num2) {
    function factorial(number) {
        let numbers = []
        for (let i = 1; i <= number; i++) {
            numbers.push(i)
        }
        let factorial = numbers.reduce((a, b) => {return a * b});
        return factorial
    }
    let result1 = factorial(num1);
    let result2 = factorial(num2);
    console.log((result1 / result2).toFixed(2));
}

main(5, 2);
main(6, 2)