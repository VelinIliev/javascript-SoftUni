function main(...args) {
    let negatives = 0;
    let zero_found = false;
    for (let i = 0; i < args.length; i++) {
        if (args[i] < 0) {
            negatives += 1
        }
        if (args[i] === 0) {
            zero_found = true
        }
    }
    if (negatives % 2 == 0 && zero_found === false) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

main(5, 12, -15);
main(-6, -12, 14)