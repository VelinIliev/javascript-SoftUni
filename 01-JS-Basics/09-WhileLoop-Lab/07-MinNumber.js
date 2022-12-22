function main(params) {
    let min_number = 10000000;
    let index = 0;
    while (true) {
       
        let current_number = params[index];
        if (current_number == 'Stop'){
            break;
        } else {
            current_number = params[index] * 1;
            if (current_number < min_number) {
                min_number = current_number;
            }
        }
        index++;
    }
    console.log(min_number);
};

main(["100", "99", "80", "70", "Stop"]);
main(["-10", "20", "-30", "Stop"])
main(["45", "-20", "7", "99", "Stop"])
main(["-1", "-2", "Stop", '10'])