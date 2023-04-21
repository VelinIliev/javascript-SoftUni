function main(params) {
    let pairs = 0;
    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params[i].length; j++) {
            if (i === params.length - 1){
                if (params[i][j] === params[i][j+1]){
                    pairs += 1
                }
            } else if (j === params.length - 1){
                if (params[i][j] === params[i+1][j]){
                    pairs += 1
                }
            } else {
                if (params[i][j] === params[i][j+1]){
                    pairs += 1
                }
                if (params[i][j] === params[i+1][j]){
                    pairs += 1
                }
            }
        }
    }
    return pairs
}

console.log(main([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
);

console.log(main([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));

console.log(main([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
));