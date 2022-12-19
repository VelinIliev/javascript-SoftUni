function main(input) {
    let speed = input * 1;
    if (speed <= 10) {
        console.log('slow');
    } else if (speed <= 50) {
        console.log('average');
    } else if (speed <= 150) {
        console.log('fast');
    } else if (speed <= 1000) {
        console.log('ultra fast');
    } else {
        console.log('extremely fast');
    }
}

main(["8"]);
main(["49.5"]);
main(["126"]);
main(["160"]);
main(["3500"]);