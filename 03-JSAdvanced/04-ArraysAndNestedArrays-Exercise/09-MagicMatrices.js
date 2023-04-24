function main(array) {
    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < array.length; i++) {
        let row = array[i].reduce((a,b) => a + b, 0);
        let col = 0;
        for (let j = 0; j < array.length; j++) {
            col += array[j][0];
        }
        sumRows += row;
        sumCols += col;
    }
    return sumRows === sumCols
}

// TODO: not Ready

console.log(main([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));


console.log(main([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));

console.log(main([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));