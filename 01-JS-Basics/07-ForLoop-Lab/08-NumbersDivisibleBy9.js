function main(params) {
    let start = params[0] * 1;
    let end = params[1] * 1;
    let total_sum = 0 ;
    let numbers = [];
    for (let i = start; i < end; i++) {
        if (i % 9 == 0) {
            total_sum += i;
            numbers.push(i);
        } 
    }
    console.log(`The sum: ${total_sum}`);
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);   
    }
}

main(["100", "200"]);