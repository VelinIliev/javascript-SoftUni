function main(array) {
    let directions = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split(" ").map((x) => isNaN(x) ? x : x * 1);
    }

    let params = array.pop();
    let counter = 0;
    let demage = 0;

    for (let j = 0; j < params.length; j++) {
        let coordinates = params[j].split(",").map((x) => x * 1);
        let row = coordinates[0];
        let col = coordinates[1];
        
        if (array[row][col] <= 0) {
            continue
        }
        
        for (let l = 0; l < directions.length; l++) {
            let check_row = row + directions[l][0];
            let check_col = col + directions[l][1];
            if (check_row >= 0 && check_row < array.length 
                && check_col >=0 && check_col < array[0].length)
                    array[check_row][check_col] -= array[row][col];
        }
        counter += 1;
        demage += array[row][col];
        array[row][col] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] > 0) {
                demage += array[i][j];
                counter += 1;
            }
        }
    }
    console.log(demage);
    console.log(counter);
}

main(['5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1']
);
main(['10 10 10',
'10 10 10', 
'10 10 10',
'0,0']
)