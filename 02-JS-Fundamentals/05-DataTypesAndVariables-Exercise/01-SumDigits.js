function main(number) {
    number = String(number);
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i] * 1;
    }
    console.log(sum);
}

main(245678);
main(97561);
main(543);