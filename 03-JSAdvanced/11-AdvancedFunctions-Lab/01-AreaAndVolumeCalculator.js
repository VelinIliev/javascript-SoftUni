function area() { 
    return Math.abs(this.x * this.y); 
};
function vol() { 
    return Math.abs(this.x * this.y * this.z); 
};

function solve(areaF, volF, input) { 
    input = JSON.parse(input)
    let result = []

    input.forEach(element => {
        let area = areaF.call(element);
        let volume = volF.call(element);
        result.push({area, volume})
    });
    return result;
}

// console.log(solve(area, vol, `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`));

console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`));