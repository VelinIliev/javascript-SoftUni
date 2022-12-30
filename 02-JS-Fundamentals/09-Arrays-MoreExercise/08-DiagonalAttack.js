function main(array) {
    let matrix = [];
    for (let i = 0; i < array.length; i++) {
        let new_row = array[i].split(" ");
        for (let k = 0; k < new_row.length; k++) {
            new_row[k] = new_row[k] * 1; 
        }
        matrix.push(new_row)
    }
    let first_diagonal_sum = 0;
    let second_diagonal_sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (row === col) {
                first_diagonal_sum += matrix[row][col]
            }
            if (row + col == matrix.length - 1) {
                second_diagonal_sum += matrix[row][col];
            }
        }
    }
    if (first_diagonal_sum === second_diagonal_sum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row === col || row + col == matrix.length - 1) {
                } else {
                    matrix[row][col] = first_diagonal_sum
                }
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(" "));
        
    }
}


main([  '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
);
main(['1 1 1',
'1 1 1',
'1 1 0']
);