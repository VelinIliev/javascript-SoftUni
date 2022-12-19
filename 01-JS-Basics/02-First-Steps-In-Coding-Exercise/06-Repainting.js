function main(input) {
    const nylon_price = 1.5;
    const paint_price  = 14.5;
    const thinner_price = 5;
    let nylon_neeeded = input[0] * 1 + 2;
    let paint_needed = input[1] * 1.1;
    let thinner_needed = input[2] * 1;
    let hours_needed = input[3] * 1;
    let bags = .4;
    let materials = nylon_neeeded * nylon_price +
                    paint_needed * paint_price +
                    thinner_needed * thinner_price +
                    bags ;
    let price_per_hour = materials * .3;
    let final_sum = materials + price_per_hour * hours_needed
    console.log(final_sum);


}

main(["10", "11", "4", "8"]);
main(["5", "10", "10", "1"]);