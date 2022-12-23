function main(number) {
    number = String(number);
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i])
    }
    console.log(`${number} Amazing? ${String(sum).includes('9') ? 'True' : 'False'}`);
}

main(1233);
main(999);