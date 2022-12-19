function convertUSDtoBGN(input) {
    let usd = input[0]*1;
    const ratio = 1.79549;
    console.log(usd * ratio);
}

convertUSDtoBGN(["22"]);
convertUSDtoBGN(["100"]);
convertUSDtoBGN(["12.5"]);
