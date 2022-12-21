function main(params) {
    let number = params[0] * 1;
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${number} = ${i * number}`);
    } 
}

main(["5"])