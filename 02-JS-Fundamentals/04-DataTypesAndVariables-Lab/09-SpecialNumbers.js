function main(number) {
    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let number_as_string = String(i);
        for (let j = 0; j < number_as_string.length; j++) {
            sum += Number(number_as_string[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

main(15);
main(20)