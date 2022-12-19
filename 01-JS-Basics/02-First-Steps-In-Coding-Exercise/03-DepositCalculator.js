function calculateDeposit(input) {
    let deposit_sum = input[0] * 1;
    let months = input[1] * 1;
    let percent = (input[2] * 1) / 100;
    let interest_per_month = (deposit_sum * percent) / 12;
    let total_interest = interest_per_month * months;
    let final_sum = deposit_sum + total_interest
    console.log(final_sum );
}

calculateDeposit(["200 ", "3 ", "5.7 "]);
calculateDeposit(["2350", "6 ", "7 "]);