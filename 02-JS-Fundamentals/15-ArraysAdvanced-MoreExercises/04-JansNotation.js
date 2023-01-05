function main(array) {
    let numbers = [];
    let no_operands = false;
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            let num2 = numbers.pop()
            let num1 = numbers.pop()
            if (num1 === undefined ) {
                no_operands = true
                break;
            }
            let result = eval(`${num1}${array[i]}${num2}`)
            numbers.push(result)
        } else {
            numbers.push(array[i])
        }
    }
    if (numbers.length === 1 && no_operands === false) {
        console.log(numbers[0]);
    } else if (no_operands === true) {
        console.log('Error: not enough operands!');
    } else {
        console.log('Error: too many operands!');
    }
}

// main([3, 4, '+']);
// main([5, 3, 4, '*', '-']);
// main([7, 33, 8, '-']);
// main([15, '/']);
// main([31, 2, "+", 11, "/"]);
main([-1, 1, "+", 101, "*", 18, "+", 3, "/"])