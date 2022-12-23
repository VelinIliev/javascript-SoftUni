function main(day, age) {
    let tickets = {
        'Weekday': [12, 18, 12],
        'Weekend': [15, 20, 15],
        'Holiday': [5, 12, 10],
    }
    if (age >= 0 && age <= 18) {
        console.log(`${tickets[day][0]}$`);
    } else if (age > 18 && age <= 64) {
        console.log(`${tickets[day][1]}$`);
    } else if (age > 64 && age <= 122) {
        console.log(`${tickets[day][2]}$`);
    } else {
        console.log('Error!');
    }
}

main('Weekday', 42);
main('Holiday', -12);
main('Holiday', 15);