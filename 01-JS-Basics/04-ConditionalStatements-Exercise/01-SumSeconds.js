function main(input) {
    let first = input[0] * 1;
    let second = input[1] * 1;
    let third = input[2] * 1;
    let total = first + second + third;
    let minutes = Math.floor(total / 60);
    let seconds = total % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    console.log(`${minutes}:${seconds}`);
}


main(["35", "45", "44"]);
main(["22", "7", "34"]);
main(["50", "50", "49"]);
main(["14", "12", "10"]);
