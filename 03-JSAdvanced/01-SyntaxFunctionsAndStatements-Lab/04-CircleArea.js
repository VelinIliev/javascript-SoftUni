function main(radius) {
    if (typeof(radius) === 'number'){
        let area = (Math.PI * radius * radius).toFixed(2)
        console.log(area);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
    };
}

main(5)
main("x")