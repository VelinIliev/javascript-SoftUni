function main(strin, repetitons) {
    let dispay_line = ''
    for (let i = 0; i < repetitons; i++) {
        dispay_line += strin
    }
    console.log(dispay_line);
}

main("abc", 3);
main("String", 2)