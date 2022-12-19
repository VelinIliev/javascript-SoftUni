function main(input) {
    const pens_price = 5.8;
    const markers_price = 7.2;
    const detergent_price = 1.2
    let pens_packages = input[0] * 1;
    let markers_packages = input[1] * 1;
    let detergents_litters = input[2] * 1;
    let discount = 1 - (input[3] / 100);
    total_sum = (pens_packages * pens_price + 
                markers_packages * markers_price + 
                detergents_litters * detergent_price) * discount;
    console.log(total_sum);
}

main(["2", "3", "4", "25"])
main(["4", "2", "5", "13"])