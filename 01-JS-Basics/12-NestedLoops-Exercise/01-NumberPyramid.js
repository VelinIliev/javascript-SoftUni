function main(params) {
    let number = params[0] * 1;
    let current = 1;
    let is_current_bigger_than_n = false;

    for (let row = 1; row <= number; row++) {
        let display_row = ''
        for (let col = 1; col <= row; col++) {
            if (current > number) {
                is_current_bigger_than_n = true;
                break
            } 
            display_row += `${current} `;
            current += 1;
        }
        console.log(display_row);
        if (is_current_bigger_than_n) {
            break
        }
    }
}

main(["7"]);
main(["12"]);
main(["15"]);