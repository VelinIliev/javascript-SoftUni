function main(number) {
    let str_number = String(number);
    while (true) {
        let sum = 0
        for (let i = 0; i < str_number.length; i++) {
            sum += str_number[i] * 1;
        }
        let average = sum / str_number.length;
        if (average <= 5) {
            str_number += '9'
        } else {
            break;
        }
    }
    console.log(str_number);
}

main(101);
main(5835);