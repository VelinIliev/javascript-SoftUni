function calculateProjectTime(input) {
    let name = input[0]
    let projects = input[1]*1
    const hours = 3     
    console.log(`The architect ${name} will need ${projects * hours} hours to complete ${projects} project/s.`)
}

calculateProjectTime(["George", "4 "])
calculateProjectTime(["Sanya", "9 "])
