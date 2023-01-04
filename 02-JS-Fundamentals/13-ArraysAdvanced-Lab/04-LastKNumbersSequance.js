function main(n, k) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(1)
        } else {
            if (i - k < 0){
                x = 0;
            } else {
                x = i - k
            }
            let sum = sequence.slice(x, i).reduce((a, b) => a + b, 0);
            sequence.push(sum);
        }
    }
    console.log(sequence.join(" "));
}

main(6, 3);
main(8, 2);
main(8, 4);