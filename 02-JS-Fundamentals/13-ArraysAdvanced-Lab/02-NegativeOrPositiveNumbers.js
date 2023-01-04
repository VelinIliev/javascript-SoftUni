function main(array) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        let current_number = array[i] * 1;
        if (current_number < 0) {
            new_array.unshift(current_number);
        } else {
            new_array.push(current_number);
        }
    }
    console.log(new_array.join("\n"));
}

main(['7', '-2', '8', '9']);
main(['3', '-2', '0', '-1']);