function main(array) {
    let left_side_sum = 0;
    let right_side_sum = 0;
    let isFound = false;
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length; j++) {
            if (j < i) {
                left_side_sum += array[j];
            } else if (j > i) {
                right_side_sum += array[j]
            }
        }
        if (left_side_sum === right_side_sum) {
            console.log(i);
            isFound = true
        }
        left_side_sum = 0;
        right_side_sum = 0;
    }
    if (isFound === false) {
        if (array.length == 1){
            console.log(0);
        } else {
            console.log('no');
        }
    }
}

main([1, 2, 3, 3]);
main([1, 2]);
main([1]);
main([1, 2, 3]);
main([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])