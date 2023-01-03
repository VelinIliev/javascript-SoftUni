function main(number) {
    let dna = 'ATCGTTAGGG';
    let symbols = [['**', '', '**'], ['*', '--', '*'], ['', '----', ''], ['*', '--', '*']];
    for (let i = 0; i < number; i++) {
        let index_symbols = i
        while(index_symbols > 3){
            index_symbols -= 4
        }
        let index_dna = i;
        while (index_dna > 4 ) {
            index_dna -= 5;
        }
        let start = symbols[index_symbols][0];
        let middle = symbols[index_symbols][1];
        let end = symbols[index_symbols][2];
        console.log(`${start}${dna[index_dna*2]}${middle}${dna[index_dna*2+1]}${end}`);
    }
}

main(100)