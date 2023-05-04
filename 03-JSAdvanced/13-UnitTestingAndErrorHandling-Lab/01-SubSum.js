function main(array, start, end) {

    if (!Array.isArray(array)) {
        return NaN
    }

    if (start < 0) {
        start = 0;
    }
    
    if (end > array.length - 1) {
        end = array.length - 1;
    }
    
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (isNaN(array[i])){
            return NaN
        } 
        sum += array[i]
    }
    return sum
}

console.log(main([10, 20, 30, 40, 50, 60], 3, 300));
console.log(main([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(main([10, 'twenty', 30, 40], 0, 2));
console.log(main([], 1, 2));
console.log(main('text', 0, 2));