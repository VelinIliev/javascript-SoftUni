function main(input) {
    let hours = input[0] * 1;
    let minutes = input[1] * 1;
    minutes = minutes + 15;
    if (minutes > 59) {
        minutes = minutes - 60;
        hours += 1;
    }
    if (hours > 23) {
        hours = hours -24;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    console.log(`${hours}:${minutes}`);
}

main(["1", "46"]);
main(["0", "01"]);
main(["23", "59"]);
main(["11", "08"]);
main(["12", "49"]);