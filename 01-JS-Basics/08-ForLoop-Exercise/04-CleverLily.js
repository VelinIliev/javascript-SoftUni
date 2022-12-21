function main(params) {
    let age = params[0] * 1;
    let washingmasine_price = params[1] * 1;
    let toy_price = params[2] * 1;
    let toys_count = 0;
    let money = 0; 
    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0){
            money += (i * 10) / 2 - 1;
        } else {
            toys_count += 1;
        }
    }
    money += toys_count * toy_price;
    if (money >= washingmasine_price) {
        console.log(`Yes! ${(money - washingmasine_price).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingmasine_price - money).toFixed(2)}`);
    }
}

main(["10", "170.00", "6"]);
main(["21", "1570.98", "3"]);

