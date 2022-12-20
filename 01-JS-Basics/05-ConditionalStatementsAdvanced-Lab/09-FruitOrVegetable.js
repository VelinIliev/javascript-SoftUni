function main(input) {
    fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    vegetables = ['tomato', 'cucumber', 'pepper', 'carrot'];
    product = input[0];
    if (fruits.includes(product)) {
        console.log('fruit');
    } else if (vegetables.includes(product)) {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

main(["banana"]);
main(["apple"]);
main(["tomato"]);
main(["water"]);