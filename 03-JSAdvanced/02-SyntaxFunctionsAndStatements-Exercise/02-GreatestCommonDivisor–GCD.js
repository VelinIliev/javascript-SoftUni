function main(num1, num2) {
    while(num2) {
        let t = num2;
        num2 = num1 % num2;
        num1 = t;
    }
    console.log(num1);
}

main(15, 5);
main(2154, 458);