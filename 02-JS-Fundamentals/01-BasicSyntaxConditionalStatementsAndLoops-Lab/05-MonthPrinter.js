function main(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month > 0 && month <= 12) {
        console.log(months[month - 1]);
    } else {
        console.log('Error!');
    } 
}

main(2);
main(0);
main(13);
