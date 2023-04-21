function main(x1, y1, x2, y2) {

    function isValid(x1, y1, x2, y2) {
        let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(result) ? "valid" : "invalid"}`);
    }
    
    isValid(x1, y1, 0, 0)
    isValid(x2, y2, 0, 0)
    isValid(x1, y1, x2, y2)
}

main(3, 0, 0, 4);
main(2, 1, 1, 1);