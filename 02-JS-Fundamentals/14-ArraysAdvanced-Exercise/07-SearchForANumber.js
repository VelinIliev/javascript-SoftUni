function main(array, params) {
    let elements_to_take = params[0];
    let elements_to_delete = params[1];
    let search_number = params[2];
    
    array.splice(elements_to_take);
    array.splice(0, elements_to_delete);

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === search_number){
            count += 1;
        }
    }
    console.log(`Number ${search_number} occurs ${count} times.`);
}

main([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );
main([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )