function radiansToDegrees(input) {
    let radians = input[0] * 1;
    let degrees = radians * (180 / Math.PI);
    console.log(degrees );
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);