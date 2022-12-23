function main(a, b, c) {
    let semi_perimeter = (a + b + c) / 2;
    let area = Math.sqrt(semi_perimeter * (semi_perimeter - a) * (semi_perimeter - b) * (semi_perimeter - c));
    console.log(area);
}

main(2, 3.5, 4);
main(3, 5.5, 4)