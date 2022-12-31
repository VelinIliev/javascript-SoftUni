function main(...numbers) {
    let smallest_number = 9000000000;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest_number) {
            smallest_number = numbers[i]
        }
    }
    console.log(smallest_number);
}

main(2, 5, 3)