function main(input) {
    let no_repeating = [];
    for (let i = 0; i < input.length; i++) {
        if (no_repeating.includes(input[i])) {

        } else {
            no_repeating.push(input[i])
        }
    }
    console.log(no_repeating.join(" "));
}

main([1, 2, 3, 4]);
main([7, 8, 9, 7, 2, 3, 4, 1, 2])