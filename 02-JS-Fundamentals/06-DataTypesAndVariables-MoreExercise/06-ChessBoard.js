function main(size) {
    let result = '<div class="chessboard">\n';
    let color = ['black', 'white'];
    let check = 0;
    if (size % 2 == 0) {
        check = 1;
    }
    for (let i = 0; i < size; i++) {
        result += ` <div>\n`;
        for (let j = 0; j < size; j++) {
            if (j == 0 && size % 2 == 0) {
                let starts_with = check;
                if (starts_with == 0){
                    check = 1;
                } else {
                    check = 0;
                }
            }
            result += `     <span class="${color[check]}"></span>\n`;
            if (check == 0){
                check = 1;
            } else {
                check = 0;
            }
        }
        result += ` </div>\n`
    }
    result += '</div>'
    console.log(result);
}

main(3);
main(4);

