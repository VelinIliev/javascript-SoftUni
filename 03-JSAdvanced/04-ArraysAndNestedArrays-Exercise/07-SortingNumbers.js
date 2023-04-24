function main(numbers) {
    let result = [];
    numbers.sort((a, b) => a - b);
    while (numbers.length > 0) {
        result.push(numbers.shift())
        if (numbers.length === 0){
            break;
        }
        result.push(numbers.pop())
    }
    return result
}

console.log(main([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 212]));