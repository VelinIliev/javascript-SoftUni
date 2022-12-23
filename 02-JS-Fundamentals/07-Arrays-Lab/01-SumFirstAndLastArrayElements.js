function main(array) {
    let first_element = array[0]
    // let last_element = array.slice(-1)[0];
    last_element = array[array.length - 1];
    console.log(first_element + last_element);

}

main([20, 30, 40]);
main([10, 17, 22, 33]);
main([11, 58, 69])