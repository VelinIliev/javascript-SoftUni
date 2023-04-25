function main(params, criteria) {
    let data = JSON.parse(params);
    criteria = criteria.split("-");
    let counter = 0;

    if (criteria[0] === 'all') {
        data.forEach(element => {
            console.log(`${counter}. ${element.first_name} ${element.last_name} - ${element.email}`);
            counter += 1
        });
    } else {
        data.forEach(element => {
            if (element[criteria[0]] === criteria[1]){
                console.log(`${counter}. ${element.first_name} ${element.last_name} - ${element.email}`);
                counter += 1
            };
        });
    }
}

main(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female')

main(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
    }, {"id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
    }]`,
    'last_name-Johnson')