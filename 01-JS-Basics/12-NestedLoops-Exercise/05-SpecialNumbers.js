function main(params) {
    let number = params[0] * 1;
    let final_list = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 0; k <= 9; k++) {
                for (let l = 0; l <= 9; l++) {
                    if (number % i == 0 && number % j == 0 && number % k == 0 && number % l == 0) {
                        final_list += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(final_list);
}

main(["3"]);
console.log();
main(["11"]);
console.log();
main(["16"]);