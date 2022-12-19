function main(input) {
    let tax = input[0] * 1;
    let snickers = tax * .6;
    let equipe = snickers * .8;
    let ball = equipe / 4;
    let accesoires  = ball / 5;
    let total = tax + snickers + equipe + ball +accesoires;
    console.log(total);
}

main(["365"])
main(["550"])