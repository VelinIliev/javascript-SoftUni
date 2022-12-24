function main(array1, array2) {
    let elements = [];
    let el_from_second_array;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                elements.push(array1[i])

            }
        }
    }
    console.log(elements.join('\n'));
}

main(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
main(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)