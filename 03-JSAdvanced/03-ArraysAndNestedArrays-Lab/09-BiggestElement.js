function main(params) {
    let maxEl = -1000000000;
    params.forEach(element => {
        element.forEach(el => {
            if (el > maxEl){
                maxEl = el
            }
        });
    });
    return maxEl;
}

console.log(main([[20, 50, 10],
    [8, 33, 145]]
   ));

console.log(main([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));