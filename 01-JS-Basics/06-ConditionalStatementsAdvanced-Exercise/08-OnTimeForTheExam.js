function main(params) {
    let exam_hour = params[0] * 1;
    let exam_minute = params[1] * 1;
    let arrival_hour = params[2] * 1;
    let arrival_minute = params[3] * 1;
    let exam = exam_hour * 60 + exam_minute;
    let arrival = arrival_hour * 60 + arrival_minute;
    let diffrence = exam - arrival;
    if (diffrence < 0) {
        console.log("Late");
        let delay = arrival - exam;
        if (delay > 59) {
            let hours = Math.floor(delay / 60);
            let minutes = delay - hours * 60;
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours after the start`);
        } else  {
            console.log(`${delay} minutes after the start`)
        }
    } else if (diffrence > 30) {
        console.log('Early');
        let early = exam - arrival;
        if (early > 59) {
            let hours = Math.floor(early / 60);
            let minutes = early - hours * 60;
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours before the start`);
        } else  {
            console.log(`${early} minutes before the start`)
        }
    } else {
        console.log('On time');
        let early = exam - arrival;
        if (early > 59) {
            let hours = Math.floor(early / 60);
            let minutes = early - hours * 60;
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours before the start`);
        } else  {
            console.log(`${early} minutes before the start`)
        }
    }
}

main(["9", "30", "9", "50"]);
main(["9", "00", "8", "30"]);
main(["16", "00", "15", "00"]);
main(["9", "00", "10", "30"]);
main(["14", "00", "13", "55"]);
main(["11", "30", "8", "12"]);
main((["10", "00", "10", "00"]));
main(["11", "30", "10", "55"]);
main((["11", "30", "12", "29"]));

