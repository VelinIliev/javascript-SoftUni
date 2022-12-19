function main(input) {
    let serial_name = input[0];
    let serial_duration = input[1] * 1;
    let break_duration = input[2] * 1;
    let lunch_duration = break_duration / 8;
    let rest_duration = break_duration / 4;
    let resting_time = break_duration - lunch_duration - rest_duration;
    if (resting_time >= serial_duration) {
        console.log(`You have enough time to watch ${serial_name} and left with ${Math.ceil(resting_time - serial_duration)} minutes free time.`);   
    } else {
        console.log(`You don't have enough time to watch ${serial_name}, you need ${Math.ceil(serial_duration - resting_time)} more minutes.`);
    }
}

main(["Game of Thrones", "60", "96"]); 
main(["Teen Wolf", "48", "60"]); 
