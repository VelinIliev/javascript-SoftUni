function main(input) {
    let comming_guests = []
    for (let i = 0; i < input.length; i++) {
        let current_guest = input[i].split(" ");
        if (current_guest.includes("not")) {
            if (comming_guests.includes(current_guest[0])){
                let index = comming_guests.indexOf(current_guest[0]);
                comming_guests.splice(index, 1);
            } else {
                console.log(`${current_guest[0]} is not in the list!`);
            }
            
        } else {
            if (comming_guests.includes(current_guest[0])) {
                console.log(`${current_guest[0]} is already in the list!`);
            } else {
                comming_guests.push(current_guest[0])
            }
        }
    }
    console.log(comming_guests.join("\n"));
}

main(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
main(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)