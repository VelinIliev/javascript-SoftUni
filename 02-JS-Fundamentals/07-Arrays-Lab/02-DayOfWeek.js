function main(day) {
    week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day <= week_days.length && day >= 1) {
        console.log(week_days[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}
main(0)
main(1);
main(2);
main(3);
main(4);
main(5);
main(6);
main(7);
main(8);
main(11)