function main(input) {
    let occurences = {}
    input.forEach(word => {
        if (word in occurences) {
            occurences[word] += 1;
        } else {
            occurences[word] = 1;
        }
    });
    let sorted = Object.entries(occurences);
    sorted.sort((a, b) => b[1] - a[1]);
    sorted.forEach(el => {
        console.log(`${el[0]} -> ${el[1]} times`);
    });
}

main(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])