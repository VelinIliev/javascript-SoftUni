function main(input) {
    let record = input[0] * 1;
    let distance = input[1] * 1;
    let per_meter = input[2] * 1;
    let resistance = (Math.floor(distance / 15)) * 12.5;
    let ivans_time = distance * per_meter + resistance;
    if (ivans_time >= record) {
        console.log(`No, he failed! He was ${(ivans_time - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${ivans_time.toFixed(2)} seconds.`);
    }
}

main(["10464", "1500", "20"]);
main(["55555.67", "3017", "5.03"]);
