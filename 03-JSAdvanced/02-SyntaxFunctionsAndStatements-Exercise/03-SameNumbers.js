function main(number) {
    let strNum = String(number);
    let firstLetter = strNum[0];
    let sumNums = 0
    let isSame = true;
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== firstLetter){
            isSame = false;
        }
        sumNums += strNum[i] * 1
    }
    console.log(isSame);
    console.log(sumNums);
}

main(2222222)
main(1234)