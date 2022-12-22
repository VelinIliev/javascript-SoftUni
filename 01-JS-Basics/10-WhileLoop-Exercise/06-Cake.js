function main(params) {
    let cake_size = params[0] * params[1];
    let index = 2;
    while (cake_size > 0) {
        let pieces = params[index];
        if (pieces == "STOP") {
            break;
        } else {
            cake_size -= pieces * 1;
        }
        index++;
    }
    if (cake_size >= 0){
        console.log(`${cake_size} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cake_size)} pieces more.`);
    }
}

main(["10", "10", "20", "20", "20", "20", "21"]);
console.log();
main(["10", "2", "2", "4", "6", "STOP"]);
