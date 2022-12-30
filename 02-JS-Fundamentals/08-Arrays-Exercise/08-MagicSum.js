function main(array, sum) {
    let results = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === sum && array[i] != array[j]) {
                if (results.includes(array[i]) || results.includes(array[j])){
                    
                } else {
                    results.push(array[i], array[j]);
                }
               
            }
        }
    }
    for (let i = 0; i < results.length; i += 2) {
        console.log(results[i], results[i + 1]);
    }
}
// TODO: not ready
main([1, 7, 6, 2, 19, 23], 8);
main([14, 20, 60, 13, 7, 19, 8], 27);
main([1, 2, 3, 4, 5, 6], 6)