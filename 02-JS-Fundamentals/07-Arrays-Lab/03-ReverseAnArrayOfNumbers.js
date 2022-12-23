function main(elements, array) {
    console.log(((array.slice(0, elements)).reverse()).join(" "));
}   

main(3, [10, 20, 30, 40, 50]);
main(4, [-1, 20, 99, 5]);
main(2, [66, 43, 75, 89, 47])
