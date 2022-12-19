function main(input) {
    const puzzle_price = 2.6;
    const toy_price = 3;
    const teddy_price = 4.1;
    const minion_price = 8.2;
    const truck_price = 2;
    let trip_price = input[0] * 1;
    let number_puzzles = input[1] * 1;
    let number_toys = input[2] * 1;
    let number_teddys = input[3] * 1;
    let number_minions = input[4] * 1;
    let number_trucks = input[5] * 1;
    let total_number = number_puzzles + number_toys 
                        + number_teddys + number_minions + number_trucks;
    let total_sum = number_puzzles * puzzle_price 
                    + number_toys * toy_price 
                    + number_teddys * teddy_price
                    + number_minions * minion_price
                    + number_trucks * truck_price
    if (total_number >= 50) {
        total_sum = total_sum * .75;
    }
    let final_sum = total_sum * .9;
    if (final_sum >= trip_price) {
        console.log(`Yes! ${(final_sum - trip_price).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(trip_price - final_sum).toFixed(2)} lv needed.`);
    }
}

main(["40.8", "20", "25", "30", "50", "10"]);
main(["320", "8", "2", "5", "5", "1"]);
