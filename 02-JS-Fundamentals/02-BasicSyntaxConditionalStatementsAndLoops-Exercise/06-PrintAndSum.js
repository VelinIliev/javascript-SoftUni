function main(start, end) {
    let total_sum = 0;
    let line_display = ''
    for (let i = start; i <= end; i++) {
        line_display += `${i} `;
        total_sum += i;
    }
    
console.log(line_display);
console.log(`Sum: ${total_sum}`);
}

main(5, 10);
main(0, 26);
main(50, 60);