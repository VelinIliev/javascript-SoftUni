function main(input) {
    let phone_book = {};
    input.forEach(element => {
        name1 = element.split(" ")[0];
        phone = element.split(" ")[1];
        phone_book[name1] = phone
    });
    for (let key in phone_book) {
        console.log(`${key} -> ${phone_book[key]}`);
    }
}

main(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
)