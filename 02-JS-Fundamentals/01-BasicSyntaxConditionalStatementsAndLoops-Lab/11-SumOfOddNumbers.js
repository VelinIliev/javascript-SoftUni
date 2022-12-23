function main(number_of_odds) {
    let counter = 0;
    let odd_sum = 0
    for (let i = 0; i < 202; i++) {
        
        if (i % 2 != 0){
            console.log(i);
            odd_sum += i;
            counter ++
        }
        if (counter == number_of_odds) {
            break
        }
    }
    console.log(`Sum: ${odd_sum}`);
}

main(5)
main(3)
main(100)
main(1)