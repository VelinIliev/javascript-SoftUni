function main(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];
    
    let distance1 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    let distance2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    let distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    function output(x1, y1, x2, y2, distance) {
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    
    output(x1, y1, 0, 0, distance1);
    output(x2, y2, 0, 0, distance2);
    output(x1, y1, x2, y2, distance3);
}

main([3, 0, 0, 4]);
main([2, 1, 1, 1]);
