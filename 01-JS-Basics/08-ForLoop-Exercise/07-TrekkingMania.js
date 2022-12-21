function main(params) {
    let musala = 0;
    let montblanc = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0
    let people_total = 0;
    for (let i = 1; i < params.length; i++) {
        current_group = params[i] * 1;
        if (current_group <=5){
            musala += current_group;
            people_total += current_group
        } else if (current_group <=12 ){
            montblanc += current_group;
            people_total += current_group;
        } else if (current_group <= 25) {
            kilimandjaro += current_group;
            people_total += current_group;
        } else if (current_group <= 40) {
            k2 += current_group;
            people_total += current_group;
        } else {
            everest += current_group;
            people_total += current_group
        }
    }
    console.log(`${((musala / people_total)*100).toFixed(2)}%`);
    console.log(`${((montblanc / people_total)*100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / people_total)*100).toFixed(2)}%`);
    console.log(`${((k2 / people_total)*100).toFixed(2)}%`);
    console.log(`${((everest / people_total)*100).toFixed(2)}%`);
}

main(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
console.log();
main(["5", "25", "41", "31", "250", "6"])

