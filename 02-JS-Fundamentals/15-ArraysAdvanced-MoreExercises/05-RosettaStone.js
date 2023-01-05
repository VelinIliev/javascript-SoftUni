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
            if (isNaN(matrix[i][j]) && matrix[i][j] !== " ") {
                continue;
            } else {
                matrix[i][j] = find_letter(matrix[i][j] + template_matrix[0][0]);
                if (i + 1 < matrix.length ){
                    matrix[i + 1][j] = find_letter(matrix[i+1][j] + template_matrix[1][0]);
                }
                if (j + 1 < matrix[0].length) {
                    console.log(matrix[i][j+1]+template_matrix[0][1]);
                    matrix[i][j + 1] = find_letter(matrix[i][j+1] + template_matrix[0][1]);
                    
                    
                }
                if (i + 1 < matrix.length && j + 1 < matrix[0].length){
                    matrix[i+1][j+1] = find_letter(matrix[i+1][j+1] + template_matrix[1][1]);
                }
            }
            console.log(matrix);
        }
        
    }
    console.log(template_matrix);
    console.log(matrix);
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

// NOT READY