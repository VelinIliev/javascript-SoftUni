function main(params) {
    let prices = {
        'working days': {
            'banana': 2.50,
            'apple': 1.2,
            'orange': .85,
            'grapefruit': 1.45,
            'kiwi': 2.7,
            'pineapple': 5.5,
            'grapes': 3.85,
        },
        "weekends": {
            'banana': 2.70,
            'apple': 1.25,
            'orange': .90,
            'grapefruit': 1.60,
            'kiwi': 3,
            'pineapple': 5.6,
            'grapes': 4.20,
        }
    }
    let product = params[0];
    let day = params[1];
    let quantity = params[2] * 1;
    working_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    weekends = ['Saturday', 'Sunday']
    let total ;
    if (working_days.includes(day) && product in prices['working days']) {
        total = (prices['working days'][product] * quantity).toFixed(2);
        console.log(total);
    } else if ((weekends.includes(day) && product in prices['weekends'])) {
        total = (prices['weekends'][product] * quantity).toFixed(2);
        console.log(total);
    } else {
        console.log('error');
    }
}

main(["apple", "Tuesday", "2"]);
main(["orange", "Sunday", "3"]);
main(["kiwi", "Monday", "2.5"]);
main(["grapes", "Saturday", "0.5"]);
main(["tomato", "Monday", "0.5"]);
