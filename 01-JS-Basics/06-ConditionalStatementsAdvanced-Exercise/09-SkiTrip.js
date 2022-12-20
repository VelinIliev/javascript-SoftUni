function main(params) {
    let room = 18;
    let appartment = 25;
    let president = 35;
    let days = params[0] * 1;
    let sleepovers = days - 1;
    let type_of = params[1];
    let grade = params[2];
    if (sleepovers < 10) {
        appartment *= .7;
        president *= .9
    } else if (sleepovers <= 15) {
        appartment *= .65;
        president *= 85;
    } else {
        appartment *= .5;
        president *=.8
    } 
    let total = 0;
    if (type_of == 'room for one person') {
        total = room * sleepovers;
    } else if (type_of == 'apartment') {
        total = appartment * sleepovers;
    } else if (type_of = 'president apartment') {
        total = president * sleepovers
    }
    if (grade == 'positive') {
        total *= 1.25;
    } else if (grade == 'negative'){
        total *= .9;
    }
    console.log(total.toFixed(2));
}   

main(["14", "apartment", "positive"]);
main(["30", "president apartment", "negative"]);
main(["12", "room for one person", "positive"]);
main(["2", "apartment", "positive"]);
