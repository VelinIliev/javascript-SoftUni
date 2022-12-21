function main(params) {
    let number = params[0] * 1;
    for (let index = number; index > 0; index--) {
       console.log(index);
    }
}

main(["2"]);
main(["3"]);
main(["5"]);