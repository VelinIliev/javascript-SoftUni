function main(input) {
    let flights = []
    let inital_flights = input[0];
    let changes = input[1];
    let flight_status = input[2];
    class Flights {
        constructor (number, destination, status=null){
            this.number = number;
            this.destination = destination;
            this.status = status;
            this.isChanged = false;
        }
    }
    for (let i = 0; i < inital_flights.length; i++) {
        let data = inital_flights[i].split(" ");
        let number = data.shift();
        let destination = data.join(" ");
        flights.push(new Flights(number, destination))
    }
    for (let i = 0; i < changes.length; i++) {
        let data = changes[i].split(" ");
        let number = data[0];
        let status = data[1];
        for (let j = 0; j < flights.length; j++) {
            
            if (flights[j].number === number) {
                flights[j].status = status;
                flights[j].isChanged = true;
            }
        }
    }
    
    if (flight_status[0] == 'Ready to fly') {
        for (let k = 0; k < flights.length; k++) {
            if (flights[k].isChanged == false){
                flights[k].status = 'Ready to fly'
                console.log(`{ Destination: '${flights[k].destination}', Status: '${flights[k].status}' }`);
            }
        }
    } else {
        for (let k = 0; k < flights.length; k++) {
            if (flights[k].status === flight_status[0]){
                console.log(`{ Destination: '${flights[k].destination}', Status: '${flights[k].status}' }`);
            }
        }
    }
}

// main([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK430 Cancelled'],
//  ['Cancelled']
// ]
// )

main([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK330 Cancelled'],
	['Ready to fly']
])
