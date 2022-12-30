function main(array) {
    let step = array.pop() * 1;
    let display_line  = '';
    for (let i = 0; i < array.length; i = i + step) {
        display_line += `${array[i]} `
    }
    console.log(display_line);
}

main(['5', '20', '31', '4', '20', '2']);
main(['dsa', 'asd', 'test', 'test', '2']);
main(['1', '2', '3', '4', '5', '6'])