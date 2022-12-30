function main(array) {
    let isMagicSum = true;
    let sums = [];
    if (array.length !== array[0].length) {
        isMagicSum = false;
    } else {
        for (let i = 0; i < array.length; i++) {
            let row_sum = 0;
            let col_sum = 0;
            for (let j = 0; j < array[i].length; j++) {
                row_sum += array[i][j]
                col_sum += array[j][i]
            }
            sums.push(row_sum);
            sums.push(col_sum)
        }
        for (let i = 0; i < sums.length; i++) {
            if (sums[i] !== sums[0]) {
                isMagicSum = false;
                break;
            }
        }
    }
    console.log(isMagicSum);
}

main([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
main([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
main([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );
main([[1, 3], [2, 1], [0, 0]]);
main([[0], [0]]);
main([[1, 0, 0],
    [0, 1, 0]])