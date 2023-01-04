function main(array) {
    array = array.sort();
    for (let i = 0; i < array.length; i++) {
        console.log(`${i+1}.${array[i]}`);
    }
}

main(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
main(['Watermelon', 'Banana', 'Apples']);