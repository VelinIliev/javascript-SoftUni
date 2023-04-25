function sumTable() {
    const table = document.querySelector('tbody');
    let sum = 0;
    for (let i = 0; i < table.children.length; i++) {
        if (i > 0 && i < table.children.length - 1) {
            const element = table.children[i].querySelector('td:nth-child(2)').textContent * 1;
            sum += element
        } else if (i === table.children.length - 1) {
            let element = table.children[i].querySelector('td:nth-child(2)');
            element.textContent = sum
        }
    }
    console.log(sum);
}