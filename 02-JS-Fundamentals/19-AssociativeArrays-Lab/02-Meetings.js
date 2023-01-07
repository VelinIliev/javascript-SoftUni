function main(input) {
    let sheudle = {};
    input.forEach(el => {
        let data = el.split(" ");
        let day = data[0];
        let name = data[1];
        if (day in sheudle) {
            console.log(`Conflict on ${day}!`);
        } else {
            sheudle[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    for (let key in sheudle) {
        console.log(`${key} -> ${sheudle[key]}`);
    }
}

main(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)