function main(string) {
    let reversed_string = '';
    for (let i = string.length -1; i >= 0; i--) {
       reversed_string += string[i]
    }
    console.log(reversed_string);
}

main('Hello');
main('SoftUni');
main('1234');