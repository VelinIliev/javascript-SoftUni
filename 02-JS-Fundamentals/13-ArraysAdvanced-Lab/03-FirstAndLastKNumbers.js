function main(array) {
    let k = array.shift()
    let first_numbers = array.slice(0, k);
    let last_numbers = array.slice(-k)
    console.log(first_numbers.join(" "));
    console.log(last_numbers.join(" "));
}

main([2, 7, 8, 9])