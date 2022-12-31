function main(number) {
    let isPerfect = true;
    if (number < 0) {
        isPerfect = false;
    } 
    let divisors = []
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i)
        }
    }
    let sum = divisors.reduce((a, b) => {return a + b});
    if (sum === number && isPerfect) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

main(6);
main(28);
main(1236498)