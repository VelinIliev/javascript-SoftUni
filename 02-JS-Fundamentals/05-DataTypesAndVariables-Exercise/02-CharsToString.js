function main(...params) {
    let display_line = '';
    params.forEach(element => {
        display_line += element
    });
    console.log(display_line);
}

main('a', 'b', 'c');
main('%', '2', 'o');
main('1', '5', 'p' );