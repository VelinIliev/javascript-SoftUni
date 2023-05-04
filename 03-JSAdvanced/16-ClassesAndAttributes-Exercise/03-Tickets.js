function main(input, criteria) {
    let tickets = []
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let [destination, price, status] = input[i].split("|");
        let newTicket = new Ticket(destination, Number(price), status);
        tickets.push(newTicket)
    }
    if (criteria === 'destination'){
        tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (criteria === 'status') {
        tickets = tickets.sort((a, b) => a.status.localeCompare(b.status))
    } else if (criteria === 'price'){
        tickets = tickets.sort((a, b) => b - a)
    }
    return tickets
}

main([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')

main([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status')