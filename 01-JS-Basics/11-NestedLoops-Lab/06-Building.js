function main(params) {
    let etages = params[0] * 1;
    let rooms = params[1] * 1;
    for (let etage = etages; etage >= 1; etage--) {
        let start = ''
        if (etage == etages) {
            start = `L${etage}`
        } else if (etage % 2 == 0) {
            start = `O${etage}`
        } else {
            start = `A${etage}`
        }
        let display_etage = ''
        for (let room = 0; room < rooms; room++) {
            display_etage += `${start}${room} `
        }
        console.log(display_etage);
    }
}

main(["6", "4"]);
console.log();
main(["9", "5"]);
console.log();
main(["4", "4"])