function main(input) {
    let adrress_book = {};
    input.forEach(el => {
        let data = el.split(":");
        let name1 = data[0];
        let address = data[1];
        adrress_book[name1] = address;
    });
    let sorted = Object.entries(adrress_book);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(el => {
        console.log(`${el[0]} -> ${el[1]}`);
    });
}

main(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)