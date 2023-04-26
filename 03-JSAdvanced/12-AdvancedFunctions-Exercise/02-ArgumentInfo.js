function main(...params) {

    let obj = {}
    
    params.forEach(element => {
        let typeEl = typeof(element);
        console.log(`${typeEl}: ${element}`);

        if (!(typeEl in obj)) {
            obj[typeEl] = 0
        }
        obj[typeEl] += 1;
    });

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    sorted.forEach(element => {
        console.log(`${element[0]} = ${element[1]}`);
    });
}

main('cat', 42, function () { console.log('Hello world!'); })
main({ name: 'bob'}, 3.333, 9.999)
