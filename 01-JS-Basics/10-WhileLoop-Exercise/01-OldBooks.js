function main(params) {
    let search_book = params[0];
    let index = 1;
    let found = false;
    let checked_books = 0;
    while (index < params.length) {
        current_book = params[index];
        
        if (current_book == search_book) {
            console.log(`You checked ${checked_books} books and found it.`);
            found = true;
            break;
        }
        if (current_book == 'No More Books') {
            break;
        }
        checked_books++;
        index++;
    } 
    if (found == false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checked_books} books.`);
    }
}

main(["Troy", "Stronger", "Life Style", "Troy"]);
console.log();
main((["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]));
console.log();
main(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);