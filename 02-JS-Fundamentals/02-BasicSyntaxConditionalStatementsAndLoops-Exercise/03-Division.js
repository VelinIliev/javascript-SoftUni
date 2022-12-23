function main(number) {
    let numbers = [2, 3, 6, 7, 10];
    let divisible = false;
    let division_number;
    for (let i = 0; i < numbers.length; i++) {
        current_number = numbers[i]
        if (number % current_number == 0 ){
            divisible = true;
            division_number = current_number;
        }
    }
    if (divisible) {
        console.log(`The number is divisible by ${division_number}`);
    } else {
        console.log(`Not divisible`);
    }
}

main(30);
main(15);
main(12);
main(1643);

