function main(char1, char2) {
    let num1 = char1.charCodeAt(0);
    let num2 = char2.charCodeAt(0);
    let start;
    let end;
    if (num1 > num2 ) {
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }
    let chars = []
    for (let i = start + 1; i < end; i++) {
        chars.push(String.fromCharCode(i));;
    }
    console.log(chars.join(" "));
}

main('a', 'd');
main('#', ':');
main('C', '#')