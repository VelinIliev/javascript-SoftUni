function main(input) {
    const regex = /[A-z0-9]+/g;
    let result = input.match(regex);
    console.log(result.join(', ').toUpperCase());
}

main('Hi, how are you?')
main('hello')