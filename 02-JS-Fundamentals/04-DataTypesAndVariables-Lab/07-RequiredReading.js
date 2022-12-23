function main(total_pages, pages_per_hour, days) {
    let hours_per_day = (total_pages / pages_per_hour) / days;
    console.log(hours_per_day);
}

main(212, 20, 2);
main(432, 15, 4);