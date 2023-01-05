function main(params) {
    let x_length = params.length
    let sorted = params.sort((a, b) => a - b);
    let new_array = [];
    for (let i = 0; i < x_length; i++) {
        if (i % 2 == 0) {
            new_array.push(sorted.pop())
        } else {
            new_array.push(sorted.shift())
        }
    }
    console.log(new_array.join(" "))
}

main([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
main([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);