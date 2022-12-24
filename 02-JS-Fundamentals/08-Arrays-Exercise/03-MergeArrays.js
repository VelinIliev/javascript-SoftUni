function main(array1, array2) {
    let new_array = [];
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 == 0) {
            new_array.push(Number(array1[i]) + Number(array2[i]));
        } else {
            new_array.push(array1[i] + array2[i])
        }
    }
    console.log(new_array.join(" - "));
}

main(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);
main(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)