function main(input) {
    const chicken_menu = 10.35;
    const fish_menu = 12.40;
    const vegan_menu = 8.15;
    const delivery = 2.5
    let number_chikens_menus = input[0] * 1;
    let number_fishs_menus = input[1] * 1;
    let number_vegans_menus = input[2] * 1;
    let total_menus = chicken_menu * number_chikens_menus +
                fish_menu * number_fishs_menus + 
                vegan_menu * number_vegans_menus;
    let dessert = total_menus * .2;
    let total = total_menus + dessert + 2.5;
    console.log(total);
}

main(["2 ", "4", "3"]);
main(["9 ", "2", "6"]);