function main(array) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            new_array.unshift(array[i] * 2);
        }
    }
    console.log(new_array.join(" "));
}
main([10, 15, 20, 25]);
main([3, 0, 10, 4, 7, 3]);