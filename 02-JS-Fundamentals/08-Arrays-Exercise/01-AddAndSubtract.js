function main(array) {
    let new_array = [];
    let old_sum = 0;
    let new_sum = 0;
    for (let i = 0; i < array.length; i++) {
        old_sum += array[i];
        let elemant
        if (array[i] % 2 == 0){
            elemant = array[i] + i;
        } else {
            elemant = array[i] - i;
        }
        new_array.push(elemant);
        new_sum += elemant
    }
    console.log(new_array);
    console.log(old_sum);
    console.log(new_sum);
}
// const map1 = array1.map(x => x * 2);
main([5, 15, 23, 56, 35]);
main([-5, 11, 3, 0, 2])