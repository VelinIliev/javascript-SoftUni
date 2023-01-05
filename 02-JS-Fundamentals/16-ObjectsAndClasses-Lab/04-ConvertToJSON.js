function main(firstName, lastName, hairColor) {
    let person = {
        'name': firstName,
        'lastName': lastName,
        'hairColor': hairColor
    }
    console.log(JSON.stringify(person));
}

main('George', 'Jones', 'Brown')