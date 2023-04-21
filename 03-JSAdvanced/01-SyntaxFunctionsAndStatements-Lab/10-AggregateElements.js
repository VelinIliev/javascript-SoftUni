function main(input) {
    let sumEl = 0;
    let inverseSum = 0;
    let concatEl = ''
    input.forEach(element => {
        sumEl += element;
        inverseSum += 1 / element
        concatEl += String(element)
    });
    console.log(sumEl);
    console.log(inverseSum);
    console.log(concatEl);
}

main([1, 2, 3])
main([2, 4, 8, 16])