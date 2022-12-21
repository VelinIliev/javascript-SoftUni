function main(params) {
    let number = params[0] * 1;
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            console.log(2 ** i);
        }        
    }
}

// main(["3"]);
// main(["4"]);
// main(["5"]);
// main(["6"]);
main(["7"]);