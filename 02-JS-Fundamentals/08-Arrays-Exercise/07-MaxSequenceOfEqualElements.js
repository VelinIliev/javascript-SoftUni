function main(array) {
    // let count = 0;
    let sequences = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            sequences.push(array[i])
            // count++;
        } else if (array[i] === array[i - 1]) {
            sequences.push(array[i])
            // count++;
        }
        // console.log(sequences);
    }
    let count = {};
    for (const element of sequences) {
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
        }
    }
    let max_count = 0;
    let max_symbol;
    for (key in count) {
        if (count[key] > max_count) {
            max_count = count[key];
            max_symbol = key;
        }
    }
    let dislpay_line = '';
    for (let i = 0; i < max_count; i++) {
        dislpay_line += `${max_symbol} `
    }
    console.log(dislpay_line);
}

main([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
main([1, 1, 1, 2, 3, 1, 3, 3]);
main([4, 4, 4, 4])
main([0, 1, 1, 5, 2, 2, 6, 3, 3])