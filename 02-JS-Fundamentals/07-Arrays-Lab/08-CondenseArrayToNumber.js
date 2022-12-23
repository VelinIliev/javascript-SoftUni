function main(array) {
    while (array.length > 1) {
        let new_array = []
        for (let i = 0; i < array.length - 1; i++) {
            new_array.push(array[i] + array[i + 1]);
        }
        array = new_array;
    }
    console.log(array.join());
}


main([2,10, 3]);
main([5,0,4,1,2]);
main([1])