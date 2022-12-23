function main(...args) {
    const sum = args.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`${sum} - ${Number.isInteger(sum) ? "Integer" : "Float"}`);
}

main(9, 100, 1.1);
main(100, 200, 303)