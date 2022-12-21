function main(params) {
    let total = 0;
    let index = 0;
    while (index < params.length) {
        if (params[index] == 'NoMoreMoney') {
            break;
        } else {
            let amount = params[index] * 1;
            if (amount < 0) {
                console.log('Invalid operation!');
                break;
            } else {
                total += amount;
                console.log(`Increase: ${amount.toFixed(2)}`);
            }
        }
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

main(["5.51", "69.42", "100", "NoMoreMoney"]);
console.log();
main(["120", "45.55", "-150"])
