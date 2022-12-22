function main(params) {
    let star_number = params[0] * 1;
    let final_number = params[1] * 1;
    let magic_number = params[2] * 1;
    let count_cobinations = 0;
    let found_combination = false;
    for (let number1 = star_number; number1 <= final_number; number1++) {
        if (found_combination) {
            break;
        }
        for (let number2 = star_number; number2 <= final_number; number2++) {
            count_cobinations++;
            if (number1 +  number2 == magic_number) {
                console.log(`Combination N:${count_cobinations} (${number1} + ${number2} = ${magic_number})`);
                found_combination = true;
                
                break;
            }
        }  
    }
    if (found_combination != true) {
        console.log(`${count_cobinations} combinations - neither equals ${magic_number}`);
    }
}

main(["1", "10", "5"]);
console.log();
main(["88", "888", "1000"]);
console.log();
main(["23", "24", "20"]) ;
console.log();
main(["88", "888", "2000"]) ;

