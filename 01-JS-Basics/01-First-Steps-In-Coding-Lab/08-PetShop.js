function calculateExpanses(input) {
    const dogFoodPrice = 2.5;
    const catFoodPrice = 4;
    let dog_food_packages = input[0]*1;
    let cat_food_packages = input[1]*1;
    total_expanses = dogFoodPrice * dog_food_packages + cat_food_packages * catFoodPrice;
    console.log(`${total_expanses} lv.`);
 
}

calculateExpanses(["5", "4"])
calculateExpanses(["13", "9"])