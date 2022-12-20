function main(input) {
    let day = input[0]
    let prices = {
        'Monday': 12,
        'Tuesday': 12,
        'Wednesday': 14,
        'Thursday': 14,
        'Friday': 12,
        'Saturday': 16,
        'Sunday': 16
    }
    console.log(prices[day]);
}

main(["Monday"]);
main(["Friday"]);
main(["Sunday"]);