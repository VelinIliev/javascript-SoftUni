function main(input) {
    let width = input[0];
    let height = input[1];
    let row = input[2];
    let col = input[3];
    let count = 1;
    // console.log(width, height, row, col);
    let matrix = [];
    for (let i = 0; i < width; i++) {
        let new_row = [];
        for (let k = 0; k < height; k++) {
            new_row.push(0)
        }
        matrix.push(new_row)
    }
    let directions = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]];
    
    let positions_to_check = [[row, col]];
    matrix[row][col] = count;
    count += 1;
    let new_positions = [];

    while (true) {
        let new_position = positions_to_check.shift();
        let row = new_position[0];
        let col = new_position[1];
        for (let i = 0; i < directions.length; i++) {
            let check_row = row + directions[i][0];
            let check_col = col + directions[i][1];
            if (check_row >= 0 && check_col >= 0 && check_row < width 
                && check_col < height && matrix[check_row][check_col] === 0)  {
                    matrix[check_row][check_col] = count;
                    new_positions.push([check_row, check_col])
             }
        }
        if (positions_to_check.length == 0) {
            positions_to_check = new_positions;
            new_positions = [];
            count += 1;
        }
        if (positions_to_check.length == 0 && new_positions.length == 0) {
            break;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

// main([4, 4, 0, 0]);
main([5, 5, 2, 2]);
main([3, 3, 2, 2]);