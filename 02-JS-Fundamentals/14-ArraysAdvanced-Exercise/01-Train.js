function main(input) {
    let wagons = input.shift().split(" ").map((x) => x*1);
    let max_capacity = input.shift() * 1;
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ");
        if (commands[0] == "Add") {
            let number = commands[1] * 1;
            wagons.push(number)
        } else {
            let peoples = commands[0] * 1;
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + peoples <= max_capacity){
                    wagons[j] += peoples;
                    break;
                }
            }
        }
    } 
    console.log(wagons.join(" "));
}

main(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

main(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)