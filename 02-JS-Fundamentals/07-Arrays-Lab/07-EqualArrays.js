function main(array1, array2) {
    let identical = true;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            identical = false
            break;
        }
    }
    if (identical) {
        let sum = 0;
        array1.forEach(el => {
            sum += el * 1;
        });
        console.log(`Arrays are identical. Sum: ${sum}`);
    } 
}

main(['10','20','30'], ['10','20','30']);
main(['1','2','3','4','5'], ['1','2','4','4','5']);
main(['1'], ['10'])