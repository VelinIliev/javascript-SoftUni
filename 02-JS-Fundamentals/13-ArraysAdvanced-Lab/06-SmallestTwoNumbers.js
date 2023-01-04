function main(array) {
    let min = 1000000000;
    let min2 = 1000000000;
    let index;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    array.splice(index, 1);
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min2) {
            min2 = array[i];
            index = i;
        }
    }
    console.log(min, min2);
}

main([30, 15, 50, 5]);
main([3, 0, 10, 4, 7, 3]);