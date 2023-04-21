function main(input) {
    input.sort((a, b) => a - b);
    let half = Math.ceil(input.length / 2)
    return input.slice(-half);
}

console.log(main([4, 7, 2, 5]));
console.log(main([3, 19, 14, 7, 2, 19, 6]));
