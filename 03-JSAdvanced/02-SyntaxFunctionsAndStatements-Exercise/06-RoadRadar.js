function main(speed, area) {
    let areas = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    if (speed <= areas[area]) {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`);
    } else {
        let difference = speed - areas[area];
        let status = 'x'
        if (difference <= 20){
            status = 'speeding'
        } else if (difference <= 40){
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areas[area]} - ${status}`);
    }
}

main(40, 'city')
main(21, 'residential')
main(120, 'interstate')
main(200, 'motorway')