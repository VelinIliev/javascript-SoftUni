function main(size) {
    for (let i = 1; i <= size; i++) {
        let display_line = ''
        for (let j = 1; j <= i; j++) {
            display_line += `${i} `
        }
        console.log(display_line);
    }
}

main(3);
main(5);
main(6);