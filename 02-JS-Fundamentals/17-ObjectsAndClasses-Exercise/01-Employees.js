function main(input) {
    let persons = {

    }
    for (let i = 0; i < input.length; i++) {
        persons[input[i]] = input[i].length
    }
    for (let key in persons) {
        console.log(`Name: ${key} -- Personal Number: ${persons[key]}`);
    }
}

main([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)