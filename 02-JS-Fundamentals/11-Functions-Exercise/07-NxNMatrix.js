function main(size) {
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(size)
        }
        console.log(row.join(" "));
    }
}

main(7);
main(3);
main(2);
main(1);