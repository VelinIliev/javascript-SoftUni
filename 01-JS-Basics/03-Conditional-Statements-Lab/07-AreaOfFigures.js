function main(input) {
    let form = input[0];
    let area ;
    if (form === 'square'){
        let a = input[1] * 1;
        area = a * a;
    } else if (form === 'rectangle') {
        let a = input[1] * 1;
        let b = input[2] * 1;
        area = a * b;
    } else if (form === 'circle') {
        let r = input[1] * 1;
        area = Math.PI * r * r;
    } else if (form === 'triangle') {
        let a = input[1] * 1;
        let h = input[2] * 1;
        area = (a * h) / 2;
    }
    console.log(area);
}

main(["square", "5"]);
main(["rectangle", "7", "2.5"]);
main(["circle", "6"]);
main(["triangle", "4.5", "20"]);