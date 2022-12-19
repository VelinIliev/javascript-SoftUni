function calculatePrice(input) {
    const price_per_sq_m = 7.61;
    let area = input[0]*1;
    let discount = ((area * price_per_sq_m) * .18)
    let final_price = (area * price_per_sq_m  - discount)
    console.log(`The final price is: ${final_price} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculatePrice(["550"])
calculatePrice(["150"])