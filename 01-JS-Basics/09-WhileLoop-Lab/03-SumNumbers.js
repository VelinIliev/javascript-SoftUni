function main(params) {
    let number = params[0] * 1;
    let index = 1;
    let sum = 0;
    while (sum < number) {
        sum += params[index] * 1;
        index ++;
    }
    console.log(sum);
}

main((["100", "10", "20", "30", "40"]));
main(["20", "1", "2", "3", "4", "5", "6",])

