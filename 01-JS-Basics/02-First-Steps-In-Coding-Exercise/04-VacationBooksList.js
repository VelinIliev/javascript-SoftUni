function calculateHoursPerDay(input) {
    let number_of_pages = input[0] * 1;
    let pages_per_hour = input[1] * 1;
    let days = input[2] * 1;
    let hours_per_day = (number_of_pages / pages_per_hour) / days;
    console.log(hours_per_day);
    
}

calculateHoursPerDay(["212 ", "20 ", "2"]);
calculateHoursPerDay(["432 ", "15 ", "4"]);