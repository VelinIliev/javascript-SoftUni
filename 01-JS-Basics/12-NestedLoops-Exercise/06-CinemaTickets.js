function main(params) {
    let index = 0;
    let total_tickets_sold = 0;
    let standard_tickets = 0;
    let kid_tickets = 0;
    let student_tickets = 0;

    while (index < params.length) {
        let command = params[index];
        if (command == 'Finish'){
            break;
        }
        if (command == "End") {
            index++;
            command = params[index];
        }
        let movie_name = command;
        let free_places = params[index + 1] * 1;
        let sold_tickets = 0;
        index++;
        index++;
        
        while(free_places != sold_tickets) {
            command = params[index];
            index++;
            if (command == 'End') {
                break;
            } else if (command == 'standard') {
                standard_tickets++;
            } else if (command == 'kid') {
                kid_tickets++;
            } else if (command == 'student') {
                student_tickets++;
            }
            sold_tickets += 1;
        }
        total_tickets_sold += sold_tickets;
        console.log(`${movie_name} - ${(sold_tickets/free_places*100).toFixed(2)}% full.`);

    }
    console.log(`Total tickets: ${total_tickets_sold}`);
    console.log(`${((student_tickets / total_tickets_sold) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard_tickets / total_tickets_sold) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid_tickets / total_tickets_sold) * 100).toFixed(2)}% kids tickets.`);
}


main(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
console.log();
main(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])


