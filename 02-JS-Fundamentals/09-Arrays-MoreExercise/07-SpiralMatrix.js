function main(width, height) {
    let numbers = []
    for (let i = 1; i <= width * height; i++) {
        numbers.push(i);
    }
    let matrix = []
    for (let i = 0; i < width; i++) {
        let row = [ ]
        for (let k = 0; k < height; k++) {
            row.push(0)
        }
        matrix.push(row)
    }
    let current_postion = [0, 0]
    while (numbers.length !== 0) {
        let current_number = numbers.shift();
        let row = current_postion[0];
        let col = current_postion[1];
        if (matrix[row][col] === 0) {
            matrix[row][col] = current_number;
        } 
        if (col + 1 < width && matrix[row][col + 1] == 0) {
            if (row - 1 >= 0 && matrix[row - 1][col] === 0 ){
                current_postion = [row - 1, col]
            } else {
                current_postion = [row, col + 1];
            }
        } else if (row + 1 < height && row + 1 < height && matrix[row + 1][col] === 0 ) {
            current_postion =  [row + 1, col];
        } else if (col - 1 >= 0 && matrix[row][col-1] === 0) {
            current_postion = [row, col - 1]; 
        } else if (row - 1 >= 0 && matrix[row - 1][col] === 0 ){
            current_postion = [row - 1, col]
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}



main(5, 5);
main(3, 3);
main(10,10)