function extract(content) {
    const text = document.getElementById(content).textContent;
    const regex = /\([A-z\d ]+\)/g;
    const found = text.match(regex);
    let finalList = found.map(x => x.replace("(", '').replace(")", ''));

    return finalList.join("; ");
}