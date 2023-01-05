function main(matrix) {
    let dictionary = {
        0: " ",
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N",
        15: "O",
        16: "P",
        17: "Q",
        18: "R",
        19: "S",
        20: "T",
        21: "U",
        22: "V",
        23: "W",
        24: "X",
        25: "Y",
        26: "Z",
    }
    function find_letter(number) {
        while (number > 26) {
            number -= 27
        }
        return dictionary[number]
    }
    let template_matrix_length = matrix.shift() * 1;
    let template_matrix = [];
    for (let i = 0; i < template_matrix_length; i++) {
        template_matrix.push(matrix.shift().split(" ").map(x => x * 1))  
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(" ").map((x) => x * 1);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if ((/[a-zA-Z ]/).test(matrix[i][j])) {
                continue;
            } else {
                for (let l = 0; l < template_matrix.length; l++) {
                    let check_row = i + l;
                    for (let k = 0; k < template_matrix[0].length; k++) {
                        let check_col = k + j;
                        if (check_row >= 0 && check_row < matrix.length 
                            && check_col >= 0 && check_col < matrix[0].length){
                                matrix[i+l][j+k] = find_letter(matrix[i+l][j+k] + template_matrix[l][k])
                        }
                    }
                }
            }
        }
    }
    let final_message = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            final_message += matrix[i][j]
        }
    }
    console.log(final_message);
}

main([ '2',
'59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22' ]
)
main([ '2',
'31 32',
'74 37',
'19 0 23 25',
'22 3 12 17',
'5 9 23 11',
'12 18 10 22' ]
)
main(["1",
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'])
