function main(array) {
    let new_array = [];
    let counter = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            new_array.push(counter)
        } else if (array[i] === 'remove'){
            new_array.pop()
        }
        counter++;
    }
    if (new_array.length > 0) {
        console.log(new_array.join(" "));
    } else {
        console.log('Empty');
    }
}

main(['add', 'add', 'add', 'add']);
main(['add', 'add', 'remove', 'add', 'add']);
main(['remove', 'remove', 'remove']);