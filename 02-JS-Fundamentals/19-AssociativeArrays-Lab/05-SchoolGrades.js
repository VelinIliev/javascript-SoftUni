function main(input) {
    let students = {}
    input.forEach(el => {
        let data =  el.split(" ");
        let name = data.shift();
        let grades = data.map(a => a * 1);
        if (name in students) {
            students[name].push(...grades);
        } else {
            students[name] = grades;
        }
    });
    let sorted = Object.entries(students);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(el => {
        let sum = 0;
        let length_of_grades = el[1].length;
        el[1].forEach(element => {
            sum += element
        });
        let average = (sum / length_of_grades).toFixed(2);
        console.log(`${el[0]}: ${average}`);
    });
}

main(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)