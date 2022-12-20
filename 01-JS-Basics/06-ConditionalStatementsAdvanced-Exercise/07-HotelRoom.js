function main(params) {
    let month = params[0];
    let sleepovers = params[1] * 1;
    let studio_price = 0;
    let appartment_price = 0;
    if (month == 'May' || month == 'October') {
        studio_price = 50;
        appartment_price = 65;
        if (sleepovers > 14) {
            studio_price *= .7;
        } else if (sleepovers > 7) {
            studio_price *= .95;
        }
    } else if (month == 'June' || month == 'September') {
        studio_price = 75.20;
        appartment_price = 68.7;
        if (sleepovers > 14) {
            studio_price *= .8
        }
    } else if (month == 'July' || month == 'August') {
        studio_price = 76;
        appartment_price = 77;
    }
    if (sleepovers > 14) {
        appartment_price *= .9;
    }
    console.log(`Apartment: ${(appartment_price * sleepovers).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio_price * sleepovers).toFixed(2) } lv.`);
}

main(["May", "15"]);
main(["June", "14"]);
main(["August", "20"]);
