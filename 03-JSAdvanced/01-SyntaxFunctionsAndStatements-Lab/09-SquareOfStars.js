function main(size=5) {
    for (let i = 0; i < size; i++) {
        let line = ''
        for (let j = 0; j < size; j++) {
            line += "* "
        }
        console.log(line);
    }
}

main(1)
console.log();
main(2);
console.log();
main()