function main(array, params) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split(" ").map((x) => x * 1);
    }
    for (let j = 0; j < params.length; j++) {
        let command = params[j].split(" ")[0];
        let value = params[j].split(" ")[1] * 1;
        if (command === "breeze") {
            for (let j = 0; j < array[0].length; j++) {
                if (array[value][j] - 15 >= 0){
                    array[value][j] -= 15;
                } else {
                    array[value][j] = 0;
                }
            }
        } else if (command === 'gale') {
            for (let k = 0; k < array.length; k++) {
                if (array[k][value] - 20 >= 0) {
                    array[k][value] -= 20;
                } else {
                    array[k][value] = 0;
                }
            }
        } else if (command === 'smog') {
            for (let i = 0; i < array.length; i++) {
                for (let k = 0; k < array[0].length; k++) {
                    array[i][k] += value;
                }
            }
        }
    }
    let polluted = [];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[0].length; k++) {
            if (array[i][k] >= 50) {
                polluted.push(`[${i}-${k}]`)
            }
        }
    }
    if (polluted.length > 0) {
        console.log(`Polluted areas: ${polluted.join(", ")}`);
    } else {
        console.log(`No polluted areas`);
    }
}

main(['5 7 72 14 4',
'41 35 37 27 33',
'23 16 27 42 12',
'2 20 28 39 14',
'16 34 31 10 24'],
['breeze 1', 'gale 2', 'smog 25']
)