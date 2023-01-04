function main(array) {
    let first_num = array[0] * 1;
    let last_num = array[array.length - 1] * 1;
    let sum = first_num + last_num;
    console.log(sum);
}

main(['20', '30', '40']);
main(['5', '10'])