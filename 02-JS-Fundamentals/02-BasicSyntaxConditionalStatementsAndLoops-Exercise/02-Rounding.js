function main(number, rounded) {
    if (rounded > 15) {
        rounded = 15;
    }
    console.log(parseFloat(number.toFixed(rounded)));
}

main(3.1415926535897932384626433832795, 2);
main(10.5, 3);