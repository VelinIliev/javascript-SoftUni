function main(input) {
    let hour = input[0] * 1;
    let day = input[1]; 
    if (hour >= 10 && hour <= 18 && day != 'Sunday') {
        console.log('open');
    } else {
        console.log('closed');
    }
}

main(["11", "Monday"]);
main(["19", "Friday"]);
main(["11", "Sunday"]);
