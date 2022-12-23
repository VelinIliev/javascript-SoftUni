function main(year, month, day) {

    let date = new Date(year, month-1, day);
    date.setDate(date.getDate() + 1)
    let new_year = date.getFullYear();
    let new_month = date.getMonth();
    let new_day = date.getDate();
    console.log(`${new_year}-${new_month+1}-${new_day}`);
}


main(2016, 9, 30);
main(2020, 3, 24);
main(1951, 12, 24);
// 1951-12-25