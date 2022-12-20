function main(params) {
    let degrees = params[0] * 1;
    let part_of_the_day = params[1];
    let outfit;
    let shoes;
    if (degrees >= 1 && degrees <= 18) {
        if (part_of_the_day == "Morning") {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (part_of_the_day == 'Afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (part_of_the_day == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } 
    } else if (degrees > 18 && degrees <= 24) {
        if (part_of_the_day == "Morning") {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (part_of_the_day == 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (part_of_the_day == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } 
    } else if (degrees >= 25){
        if (part_of_the_day == "Morning") {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (part_of_the_day == 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (part_of_the_day == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } 
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

main(["16", "Morning"]);
main(["22", "Afternoon"]); 
main(["28", "Evening"]); 
