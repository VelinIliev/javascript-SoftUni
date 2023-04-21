function main(n, m) {
    let sumNums = 0
    for (let i = n*1; i <= m*1; i++) {
        sumNums += i;
    }
    console.log(sumNums);
}

main('1', '5' );
main('-8', '20')