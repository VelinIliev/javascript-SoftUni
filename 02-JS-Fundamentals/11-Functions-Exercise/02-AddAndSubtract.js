function main(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    function substract(num1, num2) {
        return num1 - num2
    }
    let sum_numbers = sum(num1, num2);
    let final_result = substract(sum_numbers, num3);
    console.log(final_result);
}

main(23, 6, 10)