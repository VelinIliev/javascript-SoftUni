function main(input) {

    let collection = [];

    function add(params) {
        collection.push(params)
    }

    function remove(params) {
        collection = collection.filter((x) => x !== params)
    }

    function print() {
        console.log(collection.join(','));
    }

    input.forEach(element => {
        let [command, param] = element.split(" ");
        if (command === 'add'){
            add(param)
        } else if (command === 'remove'){
            remove(param)
        } else if (command === 'print'){
            print()
        }
    });
}

main(['add hello', 'add again', 'remove hello', 'add again', 'print'])
main(['add pesho', 'add george', 'add peter', 'remove peter','print'])