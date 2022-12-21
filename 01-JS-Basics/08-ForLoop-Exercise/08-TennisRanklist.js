function main(params) {
    let tournaments = params[0] * 1;
    let points = params[1] * 1;
    let starting_ponts = points;
    let winned_tournaments = 0;
    for (let i = 2; i < params.length; i++) {
        let ranking = params[i];
        if (ranking == 'W') {
            points += 2000;
            winned_tournaments++;
        } else if (ranking == 'F') {
            points += 1200;
        } else if (ranking == 'SF') {
            points += 720
        }
    }
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${ Math.floor((points - starting_ponts) / tournaments)}`);
    console.log(`${ ((winned_tournaments / tournaments) * 100).toFixed(2)}%`);
}

main(["5", "1400", "F", "SF", "W", "W", "SF"])
console.log();
main(["4", "750", "SF", "W", "SF", "W"])
console.log();
main(['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W'])