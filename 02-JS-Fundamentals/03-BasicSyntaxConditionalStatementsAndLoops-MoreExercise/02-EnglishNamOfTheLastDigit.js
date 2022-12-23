function main(number) {
    number = String(number).slice(-1);
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(numbers[Number(number)]);
}

main(512);
main(1);
main(1643);