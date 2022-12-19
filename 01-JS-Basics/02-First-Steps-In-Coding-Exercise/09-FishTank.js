function main(input) {
    let length = input[0] * 1;
    let width = input[1] * 1;
    let height = input[2] * 1;
    let percent = 1 - (input[3] / 100);
    let volume = length * height * width / 1000;
    let litters_needed = volume * percent
    console.log(litters_needed);
}

main(["85 ", "75", "47", "17"]);
main(["105", "77", "89", "18.5"]);