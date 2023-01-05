function main(params1, params2) {
    let sequence_of_numbers = params1;
    let bomb = params2[0];
    let power = params2[1];
    while (sequence_of_numbers.includes(bomb)) {
        let index = sequence_of_numbers.indexOf(bomb);
        start = index - power < 0 ? 0 : index - power
        sequence_of_numbers.splice(start, power * 2 + 1);
    }
    let sum = sequence_of_numbers.reduce((a, b) => a + b, 0);
    console.log(sum);
}

main([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    );
main([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    )
main([1, 7, 7, 1, 2, 3],
    [7, 1]
    )
main([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    )