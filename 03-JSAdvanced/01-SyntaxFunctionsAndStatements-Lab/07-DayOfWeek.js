function main(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(days.indexOf(day) >= 0 ? days.indexOf(day) + 1 : "error");
}

main('Monday')
main('Friday')
main('Invalid')