function main(params) {
    let number1 = params[0] * 1;
    let number2 = params[1] * 1;
    let final_numbers = ''
    for (let index = number1; index <= number2; index++) {
        let current_number = String(index)
        let odd_sum = 0;
        let even_sum = 0;
        for (let i = 0; i < current_number.length; i++) {
            if (i % 2 === 0) {
                even_sum += Number(current_number[i]);
            } else {
                odd_sum += Number(current_number[i])
            }
        }
        if (odd_sum == even_sum) {
            final_numbers += `${current_number} `;
        }
    } 
    if (final_numbers) {
        console.log(final_numbers);
    }
};

main(["100000", "100050"]);
console.log();
main(["123456","124000"]); 
console.log();
main(["299900", "300000"]); 
console.log();
main(["100115", "100120"]); 

