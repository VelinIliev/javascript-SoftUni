function main(...params) {
    let display_line = '';
    for (let i = params.length - 1; i >= 0; i--) {
        display_line += `${params[i]} `
    }
    console.log(display_line);
}

main('A', 'B', 'C');