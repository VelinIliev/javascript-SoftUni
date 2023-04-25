function colorize() {
    const table = document.querySelector("tbody")

    for (let i = 0; i < table.children.length; i++) {
        const element = table.children[i];
        if (i % 2 !== 0) {
            table.children[i].style.backgroundColor = 'teal';
        }

    }
}