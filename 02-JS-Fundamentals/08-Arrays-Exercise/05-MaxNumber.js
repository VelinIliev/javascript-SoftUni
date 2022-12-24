function main(array) {
    let max_numbers = [];
    for (let i = 0; i < array.length; i++) {
        let bigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                bigger = false;
            }
        }
        if (bigger) {
            max_numbers.push(array[i])
        }
    }
    console.log(max_numbers.join(" "));
}

main([1, 4, 3, 2]);
main([14, 24, 3, 19, 15, 17]);
main([41, 41, 34, 20]);
main([27, 19, 42, 2, 13, 45, 48])