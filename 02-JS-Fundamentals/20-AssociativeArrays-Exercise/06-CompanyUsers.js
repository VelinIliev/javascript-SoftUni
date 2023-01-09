function main(input) {
    let companies = {};
    input.forEach(element => {
        let data = element.split(" -> ");
        let company = data[0];
        let id = data[1];
        if (company in companies){

        } else {
            companies[company] = []
        }
        if (companies[company].includes(id)) {

        } else {
            companies[company].push(id)
        }
    });
    let sorted = Object.entries(companies);
    sorted.sort()
    sorted.forEach(element => {
        console.log(element[0]);
        element[1].forEach(el => {
            console.log(`-- ${el}`)
        });
    });
    
}

main([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )