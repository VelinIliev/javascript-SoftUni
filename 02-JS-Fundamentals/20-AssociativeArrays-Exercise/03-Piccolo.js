function main(input) {
    let cars = [];
    input.forEach(el => {
        let direction = el.split(", ")[0];
        let plate = el.split(", ")[1];
        if (direction === "IN") {
            cars.push(plate)
        } else if (direction === "OUT") {
            let index = cars.indexOf(plate);
            cars.splice(index,1)
        }
    });
    cars.sort()
    if (cars.length > 0) {
        console.log(cars.join("\n"));
    } else {
        console.log('Parking Lot is Empty');
    }
}

main(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
main(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)