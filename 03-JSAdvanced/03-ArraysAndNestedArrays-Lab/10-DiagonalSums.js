function main(params) {
    let sumMainDiag = 0;
    let sumSecDiag = 0; 
    for (let i = 0; i < params.length; i++) {
        sumMainDiag += params[i][i]
        sumSecDiag += params[i][params.length - 1 - i];
    }
    console.log(sumMainDiag, sumSecDiag);
}

main([[20, 40],
    [10, 60]]
   )

main([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )