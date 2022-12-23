function main(input) {
    console.log(typeof(input));
    if (typeof(input) == 'string' || typeof(input) == 'number' ) {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

main('Hello, JavaScript!');
main(18);
main(null);