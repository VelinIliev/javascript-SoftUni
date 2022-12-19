function main(input) {
    const gpu_price = 250;
    let budget = input[0];
    let number_gpu = input[1] * 1;
    let number_cpu = input[2] * 1;
    let number_ram = input[3] * 1;
    let total_gpus = number_gpu * gpu_price;
    let cpu_price = total_gpus * .35;
    let ram_prics = total_gpus * .1;
    
    let total = total_gpus 
                + number_cpu * cpu_price 
                + number_ram * ram_prics;
    if (number_gpu > number_cpu) {
        total = total * .85;
    }
    if (total <= budget) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
    
}

main(["900", "2", "1", "3"]);
main(["920.45", "3", "1", "1"]);
