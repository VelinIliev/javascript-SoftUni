function main(input) {
    
    let obj = {}

    function create(name) {
        obj[name] = {}
    }

    function inherit(name, parentName) {
        obj[name] = Object.create(obj[parentName]);
    }

    function set (name, key, value) {
        obj[name][key] = value;
    }

    function print(name) {
        let output = [];
        for (let key in obj[name]) {
            output.push(`${key}:${obj[name][key]}`);
        }
        console.log(output.join(","));
    }

    input.forEach(element => {

        let data = element.split(" ");

        if (data.includes('inherit')) {
            let [name, parentName] = [data[1], data[3]]
            inherit(name, parentName)
        } else if (data.includes('create')){
            let name = data[1]
            create(name)
        } else if (data.includes('set')) {
            let [name, key, value] = [data[1], data[2], data[3]]
            set(name, key, value)
        } else if (data.includes('print')){
            let name = data[1]
            print(name)
        }
    });
    // console.log(obj);
}

main(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2'])

