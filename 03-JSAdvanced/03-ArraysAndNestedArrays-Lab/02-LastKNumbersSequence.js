function main(n, k) {
    let result = [1];
    
    for (let i = 0; i < n - 1 ; i++) {
        let sum = result.slice(-k).reduce((a, b) => a + b, 0);
        result.push(sum)
    }
    // for (let i = 0; i < n - 1; i++) {
    //     let sum = 0
    //     for (let j = 0; j < k; j++) {
    //         let number = result[result.length - j - 1];
    //         if (number){
    //             sum += number
    //         }
    //     } 
    //     result.push(sum)
    // }
    return result;
}

console.log(main(6, 3));
console.log(main(8, 2));
