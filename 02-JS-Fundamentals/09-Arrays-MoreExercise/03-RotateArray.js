function main(array) {
    let rotations = array.pop() * 1;
    for (let i = 0; i < rotations; i++) {
        let element = array.pop();
        array.unshift(element)
    }
    console.log(array.join(" "));
}

main(['1', '2', '3', '4', '2']);
main(['Banana', 'Orange', 'Coconut', 'Apple', '15']);