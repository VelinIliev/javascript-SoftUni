function main(input) {
    let first = input[0] * 1;
    let last = input.slice(-1)[0] * 1;
    return first + last
}

console.log(main(['20', '30', '40']));
console.log(main(['5', '10']));