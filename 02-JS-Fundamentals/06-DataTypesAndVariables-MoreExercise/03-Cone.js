function main(radius, height) {
    let volume = (Math.PI * radius * radius * (height / 3)).toFixed(4)
    console.log(`volume = ${volume}`);
    let area = (Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height))).toFixed(4) ;
    console.log(`area = ${area}`);
}

main(3, 5);
main(3.3, 7.8);