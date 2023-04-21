function main(year, month, day) {
    let date = new Date(year, month - 1, day - 1)
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

main(2016, 1, 1)
main(2015, 5, 10)