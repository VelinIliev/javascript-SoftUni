function main(array) {
    let found_pairs = 0;
    for (let i = 0; i < array.length; i++) {        
        for (let j = 0; j < array[i].length; j++) {
            let row = i;
            let col = j;
            // left
            if (col - 1 >= 0) {
                if (array[row][col] === array[row][col - 1]) {
                    found_pairs += 1;
                }
            }
            // right
            if (col + 1 < array[i].length) {
                if (array[row][col] === array[row][col + 1]) {
                    found_pairs += 1;
                }
            }
            // up
            if (row - 1 >= 0) {
                if (array[row][col] === array[row - 1][col]) {
                    found_pairs += 1;
                }
            }
            // down
            if (row + 1 < array.length) {
                if (array[row][col] === array[row + 1][col]) {
                    found_pairs += 1;
                }
            }
        }
    }
    console.log(found_pairs / 2);
}

main([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
main([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
)