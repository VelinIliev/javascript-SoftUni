function main(params) {
    let result = params[0] * 1;
    let solutions = 0;
    for (let x1 = 0; x1 <= result; x1++) {
        for (let x2 = 0; x2 <= result; x2++) {
            for (let x3 = 0; x3 <= result; x3++) {
                if (x1 + x2 + x3 === result) {
                    solutions++;
                }
            }
        }
    }
    console.log(solutions);
}

main(["25"]);
main(["20"]);
main(["5"]);