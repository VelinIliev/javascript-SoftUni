function main(number1, number2, number3) {
    let new_array = [number1, number2, number3];
    new_array = new_array.sort();
    new_array = new_array.reverse();
    for (let i = 0; i < new_array.length; i++) {
        console.log(new_array[i]);
        }
}

main(2, 1, 3);
console.log();
main(-2, 1, 3);
console.log();
main(0, 0, 2)
