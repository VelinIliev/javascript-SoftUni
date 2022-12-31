function main(percents) {
    let number = percents / 10;
    let loading_bar = '..........'.split("")
    for (let i = 0; i < number; i++) {
        loading_bar[i] = "%";
    }
    if (percents === 100) {
        console.log('100% Complete!');
        console.log(`[${loading_bar.join("")}]`);
    } else {
        console.log(`${percents}% [${loading_bar.join("")}]`);
        console.log('Still loading...');
    }
}
    

main(30);
main(100);
main(0)