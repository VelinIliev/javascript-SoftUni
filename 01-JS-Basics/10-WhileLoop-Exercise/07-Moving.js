function main(params) {
    let free_space = params[0] * params[1] * params[2];
    let index = 3;
    while (free_space > 0) {
        let package = params[index];
        if (package == "Done") {
            break;
        } else {
            free_space -= package * 1;
        }
        index++;
    }
    if (free_space < 0) {
        console.log(`No more free space! You need ${Math.abs(free_space)} Cubic meters more.`);
    } else {
        console.log(`${free_space} Cubic meters left.`);
    }
}


main((["10",  "10", "2", "20", "20", "20", "20", "122"]) );
console.log();
main(["10",  "1", "2", "4",  "6", "Done"])
