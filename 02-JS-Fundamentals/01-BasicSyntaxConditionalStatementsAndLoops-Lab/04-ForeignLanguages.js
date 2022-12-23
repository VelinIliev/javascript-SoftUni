function main(country) {
    let countries = {
        'England': 'English',
        'USA': 'English',
        'Spain': 'Spanish',
        'Argentina' : 'Spanish',
        'Mexico': 'Spanish',
    }
    if (country in countries) {
        console.log(countries[country]);
    } else {
        console.log('unknown');
    } 
}

main('England');
main('USA');
main('Spain');
main('Argentina');
main('Mexico');
main('Germany');