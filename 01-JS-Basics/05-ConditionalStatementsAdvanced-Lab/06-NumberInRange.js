function main(input) {
    number = input[0] * 1;
    if (number >= -100 && number <= 100 && number != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

main(["-25"]);
main(["-0"]);
main(["25"]);