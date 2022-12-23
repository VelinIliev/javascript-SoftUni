function main(group, group_type, week_day) {
    let priceList = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.8,
            'Sunday': 10.46,
        },
        'Business': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16,
        }, 
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50,
        }, 
    }
    let total = group * priceList[group_type][week_day];
    if (group >= 30 && group_type == 'Students') {
        total *= .85;
    }
    if (group >= 100 && group_type == 'Business') {
        total -= 10 * priceList[group_type][week_day];
    }
    if (group >= 10 && group <= 20 && group_type == "Regular") {
        total *= .95;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

main(30, "Students", "Sunday");
main(40, "Regular", "Saturday" );
main(110, "Business", "Saturday" );